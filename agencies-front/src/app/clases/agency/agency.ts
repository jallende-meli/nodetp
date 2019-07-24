export class Agency {
  address: Address;
  agency_code: string;
  correspondent_id: string;
  description: string;
  disabled: string;
  distance: string;
  id: string;
  payment_method_id: string;
  phone: string;
  site_id: string;
  terminal: string;
  saved = false;
}

export class Address {
  address_line: string;
  city: string;
  country: string;
  location: string;
  other_info: string;
  state: string;
  zip_code: string;
}
