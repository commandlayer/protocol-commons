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

export const cleanAgentCard: AgentCard = {
  id: "x402://cleanagent.eth",
  name: "Clean Agent (Commons v1.0.0)",
  description: "Cleans or normalizes content using the CommandLayer Commons v1.0.0 clean verb.",
  owner: "commandlayer.eth",
  ens: "cleanagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "clean",
      version: "1.0.0",
      entry: "x402://cleanagent.eth/clean/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/clean/requests/clean.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/clean/receipts/clean.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
