import { ClassProvider } from '@angular/core';
import {
  HttpResponseDeserializer,
  JsonResponseDeserializer,
} from '../services/deserializers';

export const HTTP_RESPONSE_DESERIALIZER_PROVIDER: ClassProvider = {
  provide: HttpResponseDeserializer,
  useClass: JsonResponseDeserializer,
  multi: false,
};
