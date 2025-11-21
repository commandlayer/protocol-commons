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

export const analyzeAgentCard: AgentCard = {
  id: "x402://analyzeagent.eth",
  name: "Analyze Agent (Commons v1.0.0)",
  description: "Analyzes content using the CommandLayer Commons v1.0.0 analyze verb.",
  owner: "commandlayer.eth",
  ens: "analyzeagent.eth",
  version: "1.0.0",
  contact: "dev@commandlayer.org",
  capabilities: [
    {
      verb: "analyze",
      version: "1.0.0",
      entry: "x402://analyzeagent.eth/analyze/v1",
      schema_request: "https://commandlayer.org/schemas/v1.0.0/commons/analyze/requests/analyze.request.schema.json",
      schema_receipt: "https://commandlayer.org/schemas/v1.0.0/commons/analyze/receipts/analyze.receipt.schema.json"
    }
  ],
  metadata: {
    runtime: "node",
    network: "mainnet"
  }
} as const;
