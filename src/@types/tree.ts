export interface FileBranch {
  name: string;
  type: "file";
  size: number;
}

export interface FolderBranch {
  name: string;
  type: "folder";
  children: (FileBranch | FolderBranch)[];
}

export type Branch = FileBranch | FolderBranch;
