import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { humanFileSize } from "../utils/helper";
import { useContext, useEffect } from "react";
import TreeContext from "../contexts/TreeContext";

interface FileItemProps {
  name: string;
  size: number;
}

/**
 * Component to show file tree item
 */
const FileItem = (props: FileItemProps) => {
  const { updateFileInfo } = useContext(TreeContext);

  useEffect(() => {
    // Update file info
    updateFileInfo(props.size);
  }, []);

  return (
    <StyledFileItemContainer>
      <StyledFileIcon icon={faFileAlt} />

      <StyledFileName>{props.name}</StyledFileName>

      <StyledFileSize>{humanFileSize(props.size)}</StyledFileSize>
    </StyledFileItemContainer>
  );
};

export default React.memo(FileItem);

// ========= Start Styled Elements ==========
const StyledFileItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px;
`;

const StyledFileIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  text-align: center;
`;

const StyledFileName = styled.div`
  margin: 0px 0px 0px 16px;
`;

const StyledFileSize = styled.span`
  font-size: 9pt;
  margin-left: 16px;
`;
// ========= End Styled Elements ==========
