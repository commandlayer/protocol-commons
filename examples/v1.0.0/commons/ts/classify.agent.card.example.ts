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

export const classifyAgentCard: AgentCard = {
  id: "x402://classifyagent.eth",
  name: "Classify Agent (Commons v1.0.0)",
  description: "Classifies content using the CommandLayer Commons v1.0.0 classify verb.",
  owner: "commandlayer.eth",
  ens: "classifyagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "classify",
      version: "1.0.0",
      entry: "x402://classifyagent.eth/classify/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/classify/requests/classify.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/classify/receipts/classify.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
