import { Input } from '@teable/ui-lib/shadcn';
import { CopyButton } from '@/features/app/components/CopyButton';

export const NewSecret = (props: { secret?: string }) => {
  const { secret } = props;
  if (!secret) return;
  return (
    <div className="rounded border border-green-300 bg-green-300/20 p-3 text-sm dark:border-green-700 dark:bg-green-700/20">
      <div className="flex items-center gap-3">
        <Input className="h-8 w-[26rem] text-muted-foreground" readOnly value={secret} />
        <CopyButton variant="outline" text={secret} size="xs" iconClassName="size-4" />
      </div>
    </div>
  );
};
