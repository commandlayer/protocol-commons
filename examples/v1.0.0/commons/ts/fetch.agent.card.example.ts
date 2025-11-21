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

export const fetchAgentCard: AgentCard = {
  id: "x402://fetchagent.eth",
  name: "Fetch Agent (Commons v1.0.0)",
  description: "Fetches external data using the CommandLayer Commons v1.0.0 fetch verb.",
  owner: "commandlayer.eth",
  ens: "fetchagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "fetch",
      version: "1.0.0",
      entry: "x402://fetchagent.eth/fetch/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/fetch/requests/fetch.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/fetch/receipts/fetch.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
