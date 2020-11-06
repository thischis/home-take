interface AuthorDataI {
  date: string;
  email: string;
  name: string;
}

interface TreeDataI {
  sha: string;
}

interface CommitDataI {
  author: AuthorDataI;
  message: string;
  tree: TreeDataI;
}

export interface CommitModel {
  commit: CommitDataI;
  html_url: string;
}
