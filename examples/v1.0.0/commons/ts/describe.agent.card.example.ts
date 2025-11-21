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

export const describeAgentCard: AgentCard = {
  id: "x402://describeagent.eth",
  name: "Describe Agent (Commons v1.0.0)",
  description: "Describes entities, objects, or content using the CommandLayer Commons v1.0.0 describe verb.",
  owner: "commandlayer.eth",
  ens: "describeagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "describe",
      version: "1.0.0",
      entry: "x402://describeagent.eth/describe/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/describe/requests/describe.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/describe/receipts/describe.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
