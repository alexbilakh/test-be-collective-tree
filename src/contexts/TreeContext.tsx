import React, { useState, useEffect } from "react";
import { Branch } from "../@types/tree";
import FolderStructureTree from "../components/FolderStructureTree";
import axios from "axios";
import { challengeApiUrl } from "../utils/config";

type LoadingStatus = "initiated" | "loading" | "success" | "failed";

interface FileInfo {
  count: number;
  size: number;
}

interface TreeContextType {
  treeData: Branch[];
  loadingStatus: LoadingStatus;
  fileInfo: FileInfo;
  updateFileInfo: (size: number) => void;
}

const TreeContext = React.createContext<TreeContextType>({
  treeData: [],
  loadingStatus: "initiated",
  fileInfo: { count: 0, size: 0 },
  updateFileInfo: (size: number) => {},
});

export const TreeContextProvider = () => {
  // Folder structure data
  const [treeData, setTreeData] = useState<Branch[]>([]);
  // Tree data loading status
  const [loadingStatus, setLoadingStatus] =
    useState<LoadingStatus>("initiated");
  // File content information
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    count: 0,
    size: 0,
  });

  useEffect(() => {
    /**
     * Load & set tree data from online api endpoint
     */
    const loadTreeData = async () => {
      setLoadingStatus("loading");
      try {
        const response = await axios
          .get(challengeApiUrl)
          .then((res) => res.data);

        setTreeData(response);
        setLoadingStatus("success");
      } catch (err) {
        console.log(err);
        setLoadingStatus("failed");
      }
    };

    // Start fetching
    loadTreeData();
  }, []);

  /**
   * Update file info of 1 file
   * @param { number } size file size
   * @return { void }
   */
  const updateFileInfo = (size: number): void => {
    setFileInfo((prev) => ({
      count: prev.count + 1,
      size: prev.size + size,
    }));
  };

  return (
    <TreeContext.Provider
      value={{
        treeData,
        loadingStatus,
        fileInfo,
        updateFileInfo,
      }}
    >
      <FolderStructureTree />
    </TreeContext.Provider>
  );
};

export default TreeContext;
