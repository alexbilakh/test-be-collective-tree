import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

interface FolderItemProps {
  name: string;
  children: ReactNode;
}

/**
 * Component to show folder tree item
 */
const FolderItem = (props: FolderItemProps) => {
  // Folder open status
  const [opened, setOpened] = useState<boolean>(false);

  /**
   * Handle clicking event on a folder
   * @dev toggle open status
   */
  const handleClickItem = () => {
    setOpened((prev) => !prev);
  };

  return (
    <StyledFolderItemContainer>
      {/* Start Folder item itself */}
      <StyledItemContainer onClick={handleClickItem}>
        <StyledArrowIconWrapper>
          <FontAwesomeIcon icon={opened ? faChevronDown : faChevronRight} />
        </StyledArrowIconWrapper>

        <StyledFolderIcon icon={opened ? faFolderOpen : faFolder} />

        <StyledFolderName>{props.name}</StyledFolderName>
      </StyledItemContainer>
      {/* End Folder item itself */}

      {/* Start folder children */}
      {
        <StyledChildrenContainer visible={opened}>
          {props.children}
        </StyledChildrenContainer>
      }
      {/* End folder children */}
    </StyledFolderItemContainer>
  );
};

export default React.memo(FolderItem);

// ========= Start Styled Elements ==========
const StyledFolderItemContainer = styled.div`
  margin: 16px 0px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
`;

const StyledArrowIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
`;

const StyledFolderIcon = styled(FontAwesomeIcon)`
  margin-left: 12px;
  width: 20px;
  height: 20px;
  text-align: center;
`;

const StyledFolderName = styled.div`
  margin-left: 16px;
`;

const StyledChildrenContainer = styled.div<{ visible: boolean }>`
  padding: 0px 0px 0px 30px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
// ========= End Styled Elements ==========
