import AirtablePlus from "airtable-plus";

export default async function handler(req, res) {
  const EventsTable = new AirtablePlus({
    baseID: process.env.AIRTABLE_BASE_ID,
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Events",
  });

  const events = await EventsTable.read({
    filterByFormula: "{Approval} = 'Approved'",
  });

  const eventsInfo = events.map((event) => ({
    name: event.fields["Event Name- Final"],
    website: event.fields["Website"],
    coordinates: event.fields["Coordinates"]
  }));

  return res.status(200).json(eventsInfo);
}