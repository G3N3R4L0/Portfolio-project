import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "bkzwsx6i",
    dataset: "production",
    apiVersion: "2022-02-01",
    ignoreBrowserTokenWarning: true,
    useCdn: true,
    token: "skoj6aIW1Wl47qym4Sg5sUv1VBOqENkehYoExYrBascRdp1aSZPwjWI8JWZrbdc40B6O5iEbaFL5k6LFNSVGOH7OmjqNsbnd64DVjYLyS6gT64Q6egOXylFVbeOJ4i8cEQv42FhhVPgwPKPxQB7qDvkqEhaVBzIRirswSJCAV4Zm2JUrjHit",
});

const builder = imageUrlBuilder(client);

export const urlFor = (soruce) => builder.image(soruce);
