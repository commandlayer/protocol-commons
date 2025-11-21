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

export const convertAgentCard: AgentCard = {
  id: "x402://convertagent.eth",
  name: "Convert Agent (Commons v1.0.0)",
  description: "Converts content between formats using the CommandLayer Commons v1.0.0 convert verb.",
  owner: "commandlayer.eth",
  ens: "convertagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "convert",
      version: "1.0.0",
      entry: "x402://convertagent.eth/convert/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/convert/requests/convert.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/convert/receipts/convert.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
