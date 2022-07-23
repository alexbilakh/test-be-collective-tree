import React, { useContext } from "react";
import styled from "styled-components";
import TreeBranch from "./TreeBranch";
import TreeContext from "../contexts/TreeContext";
import { humanFileSize } from "../utils/helper";

const FolderStructureTree = () => {
  const { loadingStatus, treeData, fileInfo } = useContext(TreeContext);
  return (
    <StyledTreeContainer>
      {/* Start loading message */}
      {loadingStatus === "loading" && "Loading ..."}
      {/* End loading message */}

      {/* Start failed message */}
      {loadingStatus === "failed" &&
        "Failed to fetch folder structure. Please check your internet connection and try again."}
      {/* End failed message */}

      {/* Start main content */}
      {loadingStatus === "success" && (
        <React.Fragment>
          {/* Start Tree */}
          {treeData.map((branch, index) => {
            return <TreeBranch key={index} {...branch} />;
          })}
          {/* End Tree */}

          <StyledDivider />

          {/* Start file info */}
          <StyledFileInfoParagraph>
            Total Files: {fileInfo.count}
          </StyledFileInfoParagraph>

          <StyledFileInfoParagraph>
            Total Filesize: {humanFileSize(fileInfo.size)}
          </StyledFileInfoParagraph>
          {/* End file info */}
        </React.Fragment>
      )}
      {/* End main content */}
    </StyledTreeContainer>
  );
};

// ========= Start Styled Elements ==========
const StyledTreeContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 50px;
  margin: 0 auto;
`;

const StyledDivider = styled.hr`
  border: solid 1px #c7ccd0;
  margin: 30px 0px;
`;

const StyledFileInfoParagraph = styled.div`
  font-size: 15pt;
  margin-bottom: 10px;
`;
// ========= End Styled Elements ==========

export default React.memo(FolderStructureTree);
