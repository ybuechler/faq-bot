export type Wissensbeitrg = {
    id: number,
    title: string,
    summary: string,
    content: string,
    workflowUrl: string,
    lastUpdated: Date,
    brand: "Coop" | "Jumbo" | "Interdiscount" | "Livique",
    tags: string[],
    active: boolean,
}
            
