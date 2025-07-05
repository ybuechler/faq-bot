export type Wissensbeitrag = {
    id: number,
    title: string,
    summary: string,
    content: string,
    workflowUrl: string,
    icon: string,
    lastUpdated: Date,
    creationDate: Date,
    brand: "Coop" | "Jumbo" | "Interdiscount" | "Livique",
    tags: string[],
    active: boolean,
}
 



