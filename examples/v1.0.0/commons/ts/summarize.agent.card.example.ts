export interface AgentCapability {
  verb: string;
  version: string;
  entry: string;
  schema_request: string;
  schema_receipt: string;
}

export interface AgentCard {
  id: string;
  name: string;
  description: string;
  owner: string;
  ens: string;
  version: string;
  contact?: string;
  capabilities: AgentCapability[];
  metadata?: Record<string, unknown>;
}

export const summarizeAgentCard: AgentCard = {
  id: "x402://summarizeagent.eth",
  name: "Summarize Agent (Commons v1.0.0)",
  description: "Summarizes arbitrary text using the CommandLayer Commons v1.0.0 summarize verb.",
  owner: "commandlayer.eth",
  ens: "summarizeagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "summarize",
      version: "1.0.0",
      entry: "x402://summarizeagent.eth/summarize/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/summarize/requests/summarize.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/summarize/receipts/summarize.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
