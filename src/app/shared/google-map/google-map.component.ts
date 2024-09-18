import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { IUserAddressForm } from '@app/interface/user';
import { MajappInputComponent } from '@app/ui/majapp-input/majapp-input.component';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [
    GoogleMapsModule,
    MajappInputComponent
  ],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent implements AfterViewInit {

  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  @Input() addressForm!: FormGroup<IUserAddressForm>;

  center = { lat: 49.82245, lng: 19.04686 };
  zoom = 13;

  options: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID',
    center: this.center,
    zoom: this.zoom,
  };

  ngAfterViewInit() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.searchInput.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        return;
      }

      // Ustawienie nowego centrum mapy
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      // Zaktualizuj opcje mapy, aby przenieść ją do nowej lokalizacji
      this.map.panTo(this.center);
      this.map.googleMap?.setZoom(15)

      // Dodaj znacznik na wybrane miejsce
      this.markers = [{ position: this.center, id: Math.random() }];
    });
  }

  markers: any[] = [];

  onMapReady(map: any) {
    this.map = map;
  }

  geocoder = new google.maps.Geocoder();

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      this.markers = [{ position: event.latLng.toJSON() }];
      const position = event.latLng.toJSON();

      this.geocoder.geocode({ location: position }, (results, status) => {
        if (status === 'OK' && results ? results[0] : []) {
          
          const res = results ? results : [];
          const city =
            this.getAddressComponent(res[0].address_components, [
              'locality',
              'administrative_area_level_1',
            ]) || '';
          const street =
            this.getAddressComponent(res[0].address_components, ['route']) ||
            '';
          const streetNumber =
            this.getAddressComponent(res[0].address_components, [
              'street_number',
            ]) || '';
          const postalCode =
            this.getAddressComponent(res[0].address_components, [
              'postal_code',
            ]) || '';
          const country =
            this.getAddressComponent(res[0].address_components, ['country']) ||
            '';

          this.addressForm.patchValue({
            city,
            street: `${street} ${streetNumber}`,
            postalCode,
            country,
          });
          this.map.googleMap?.setZoom(13)
        } else {
          console.error('Geocode failed: ' + status);
        }
      });
    }
  }

  getAddressComponent(components: any[], types: string[]): string | undefined {
    for (const type of types) {
      const component = components.find((component) =>
        component.types.includes(type)
      );

      if (component) {
        return component.long_name;
      }
    }
    return undefined; // Brak pasującego komponentu
  }

}
