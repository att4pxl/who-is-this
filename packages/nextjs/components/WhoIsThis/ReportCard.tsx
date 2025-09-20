import { Address } from "~~/components/scaffold-eth";

interface ReportCardProps {
  reportId: number;
  title: string;
  good: bigint;
  bad: bigint;
  reporter: string;
  voterCount: bigint;
  hasVoted: boolean;
  canClaimReporter: boolean;
  canClaimVoter: boolean;
  voterClaimed?: boolean;
  connectedAddress?: string;
  onVote: (reportId: number, isGood: boolean) => void;
  onClaimReporter: (reportId: number) => void;
  onClaimVoter: (reportId: number) => void;
}

export const ReportCard = ({
  reportId,
  title,
  good,
  bad,
  reporter,
  voterCount,
  hasVoted,
  canClaimReporter,
  canClaimVoter,
  voterClaimed,
  connectedAddress,
  onVote,
  onClaimReporter,
  onClaimVoter,
}: ReportCardProps) => {
  return (
    <div className="bg-base-100 rounded-xl p-6 shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">
            #{reportId}: {title}
          </h3>
          <p className="text-sm text-gray-300">
            Reporter: <Address address={reporter} />
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-success">{good.toString()}</p>
            <p className="text-sm text-gray-300">Good</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-error">{bad.toString()}</p>
            <p className="text-sm text-gray-300">Bad</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        {!hasVoted && connectedAddress && (
          <>
            <button className="btn btn-success btn-sm" onClick={() => onVote(reportId, true)}>
              Vote Good
            </button>
            <button className="btn btn-error btn-sm" onClick={() => onVote(reportId, false)}>
              Vote Bad
            </button>
          </>
        )}
        {hasVoted && !voterClaimed && <span className="badge badge-success">You voted</span>}
        {hasVoted && voterClaimed && <span className="badge badge-success">Already claimed</span>}
        {canClaimReporter && (
          <button className="btn btn-warning btn-sm" onClick={() => onClaimReporter(reportId)}>
            Claim 5 WITH (Reporter)
          </button>
        )}
        {canClaimVoter && (
          <button className="btn btn-warning btn-sm" onClick={() => onClaimVoter(reportId)}>
            Claim 1 WITH (Voter)
          </button>
        )}
        <span className="text-sm text-gray-300 ml-auto">{voterCount.toString()} voters</span>
      </div>
    </div>
  );
};
