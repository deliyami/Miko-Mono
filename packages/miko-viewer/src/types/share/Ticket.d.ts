// Generated by https://quicktype.io

import { Concert } from './Concert';

export interface Ticket {
  id: number;
  createdAt: string;
  concertId: number;
  concert?: Concert;
  price: number;
  runningTime: number;
  saleStartDate: string;
  saleEndDate: string;
  concertStartDate: string;
  concertEndDate: string;
  archiveEndTime: string;
  channelArn: string;
  playbackUrl: string;
  streamKeyArn: string;
  streamKeyValue: string;
  ingestEndpoint: string;
}