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

export const parseAgentCard: AgentCard = {
  id: "x402://parseagent.eth",
  name: "Parse Agent (Commons v1.0.0)",
  description: "Parses unstructured or semi-structured content using the CommandLayer Commons v1.0.0 parse verb.",
  owner: "commandlayer.eth",
  ens: "parseagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "parse",
      version: "1.0.0",
      entry: "x402://parseagent.eth/parse/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/parse/requests/parse.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/parse/receipts/parse.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
