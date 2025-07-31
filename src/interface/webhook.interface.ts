export interface IGetVerification {
  "hub.mode"?: string;
  "hub.verify_token"?: string;
  "hub.challenge"?: string;
}

interface IWebhookMessagingEvent {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message?: {
    mid: string;
    text?: string;
    attachments?: Array<any>;
  };
  postback?: any;
}

interface IWebhookEntry {
  id: string;
  time: number;
  messaging: IWebhookMessagingEvent[];
}

export interface IWebhookPost {
  object: string;
  entry: IWebhookEntry[];
}
