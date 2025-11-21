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

export const explainAgentCard: AgentCard = {
  id: "x402://explainagent.eth",
  name: "Explain Agent (Commons v1.0.0)",
  description: "Explains concepts, outputs, or behaviors using the CommandLayer Commons v1.0.0 explain verb.",
  owner: "commandlayer.eth",
  ens: "explainagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "explain",
      version: "1.0.0",
      entry: "x402://explainagent.eth/explain/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/explain/requests/explain.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/explain/receipts/explain.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
