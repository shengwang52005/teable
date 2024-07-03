/* eslint-disable @typescript-eslint/naming-convention */
import { Inject } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { registerAs } from '@nestjs/config';

export const thresholdConfig = registerAs('threshold', () => ({
  maxCopyCells: Number(process.env.MAX_COPY_CELLS ?? 50_000),
  maxResetCells: Number(process.env.MAX_RESET_CELLS ?? 50_000),
  maxPasteCells: Number(process.env.MAX_PASTE_CELLS ?? 50_000),
  maxReadRows: Number(process.env.MAX_READ_ROWS ?? 10_000),
  maxDeleteRows: Number(process.env.MAX_DELETE_ROWS ?? 1_000),
  maxSyncUpdateCells: Number(process.env.MAX_SYNC_UPDATE_CELLS ?? 10_000),
  maxGroupPoints: Number(process.env.MAX_GROUP_POINTS ?? 5_000),
  calcChunkSize: Number(process.env.CALC_CHUNK_SIZE ?? 1_000),
  maxFreeRowLimit: Number(process.env.MAX_FREE_ROW_LIMIT ?? 0),
  estimateCalcCelPerMs: Number(process.env.ESTIMATE_CALC_CEL_PER_MS ?? 3),
  bigTransactionTimeout: Number(
    process.env.BIG_TRANSACTION_TIMEOUT ?? 10 * 60 * 1000 /* 10 mins */
  ),
  // Maximum limit for creating webhooks, If the environment variable is not set, it defaults to 10.
  maxCreateWebhookLimit: Number(process.env.MAX_CREATE_WEBHOOK_LIMIT ?? 10),
}));

export const ThresholdConfig = () => Inject(thresholdConfig.KEY);

export type IThresholdConfig = ConfigType<typeof thresholdConfig>;
