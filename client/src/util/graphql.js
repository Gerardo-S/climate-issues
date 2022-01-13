import gql from "graphql-tag";

export const FETCH_CLIMATE_ISSUES_QUERY = gql`
  {
    getClimateIssues {
      id
      author {
        id
        username
      }
      title
      body
      upVote {
        id
        username
      }

      downVote {
        id
        username
      }
      totalVoteCount

      comments {
        author
        id
        body
        createdAt
      }
    }
  }
`;
