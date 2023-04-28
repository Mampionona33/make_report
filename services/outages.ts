import { IOutages } from "@/pages/api/models/Outage/IOutages";

export const fetchOutages = async (): Promise<IOutages[]> => {
  try {
    const response = await fetch("/api/routes/outage");

    if (!response.ok) {
      throw new Error("Failed to fetch outages");
    }
    const outages = await response.json();

    return outages.data as IOutages[];
  } catch (err) {
    console.error(err);
    throw err;
  }
};
