import { Client } from "@gadget-client/mao";

export const api = new Client({
  // for client side data access, we don't pass anything and the client will default to using the browser session authentication mode
  // for server side data access, pass an API key by uncommenting the line below
  authenticationMode: { apiKey: "gsk-ig3N4BMUJt4cPgqTzXZQTKwRw8Tfbcat"  }
});