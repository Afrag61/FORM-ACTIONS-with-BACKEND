import { useContext, useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import UpvoteOpinion from "./UpvoteOpinion";
import DownvoteOpinion from "./DownvoteOpinion";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const {upvoteOpinion, downvoteOpinion} = useContext(OpinionsContext);
  
  const upvoteAction = async () => {
    await upvoteOpinion(id)
    console.log("upVote")
  }
  
  const downvoteAction = async () => {
    await downvoteOpinion(id)
    console.log("downVote")
  }

  // const [upvoteFormState, upvoteFormAction, upvoteFormPending ] = useActionState(upvoteAction)
  // const [downvoteFormState, downvoteFormAction, downvoteFormPending ] = useActionState(downvoteAction)
  
  return (
    // <article onClick={() => loadOpinion(id)}>
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        {/* <button formAction={upvoteFormAction} disabled={upvoteFormPending || downvoteFormPending}>
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
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button> */}
        <UpvoteOpinion formAction={upvoteAction}/>

        <span>{votes}</span>
        
        <DownvoteOpinion formAction={downvoteAction}/>
        {/* <button formAction={downvoteFormAction} disabled={upvoteFormPending || downvoteFormPending}>
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
        </button> */}
      </form>
    </article>
  );
}
