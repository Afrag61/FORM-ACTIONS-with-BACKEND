import { useFormStatus } from "react-dom";

const downvoteOpinion = ({formAction}) => {
    const {pending} = useFormStatus()

    return (
        <button formAction={formAction} disabled={pending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
    );
}

export default downvoteOpinion;
