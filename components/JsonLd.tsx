
import { useEffect } from "react";
import type { JsonObject } from "../types/json";

type JsonLdData = JsonObject | JsonObject[];

type JsonLdProps = {
  data: JsonLdData;
  id?: string;
};

export const JsonLd = ({ data, id = "jsonld" }: JsonLdProps) => {
  useEffect(() => {
    document.getElementById(id)?.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => document.getElementById(id)?.remove();
  }, [data, id]);

  return null;
};