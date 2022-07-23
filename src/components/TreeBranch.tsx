import React from "react";
import { Branch } from "../@types/tree";
import FolderItem from "./FolderItem";
import FileItem from "./FileItem";

type TreeBranchProps = Branch;

/**
 * Recursive component for tree branches
 * @dev shows leaf itself and all children
 */
const TreeBranch = (props: TreeBranchProps) => {
  // In case of file branch
  if (props.type === "file")
    return <FileItem name={props.name} size={props.size} />;

  // In case of folder branch
  return (
    <FolderItem name={props.name}>
      {props.children &&
        props.children.map((branch, index) => (
          // Call self component again to show all children branches
          <TreeBranch key={index} {...branch} />
        ))}
    </FolderItem>
  );
};

export default React.memo(TreeBranch);
