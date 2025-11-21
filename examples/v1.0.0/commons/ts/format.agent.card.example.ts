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

export const formatAgentCard: AgentCard = {
  id: "x402://formatagent.eth",
  name: "Format Agent (Commons v1.0.0)",
  description: "Formats content without changing semantics using the CommandLayer Commons v1.0.0 format verb.",
  owner: "commandlayer.eth",
  ens: "formatagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "format",
      version: "1.0.0",
      entry: "x402://formatagent.eth/format/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/format/requests/format.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/format/receipts/format.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
