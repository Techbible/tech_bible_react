import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Toolitem from '../Tools/Toolitem';
import { BASE_URL } from '../../config/mongo';

function FoldersContent() {
    const { currentUser, currentUserData } = useContext(AuthContext);
    let { index } = useParams();

    const [FolderTools, setFolderTools] = useState();

    useEffect(() => {
        const fetchFolderTools = async () => {
          try {
              const toolIds = currentUserData?.folders[index]?.tools.map(tool => tool.toolId);
              console.log(toolIds);
              const response = await axios.get(`${BASE_URL}/getToolsInFolder`, {params: { toolIds: toolIds }});
          setFolderTools(response.data);
            console.log(response.data);
          } catch (error) {
            console.error(error);
            // Handle error cases and display error messages to the user
          }
        };   
        fetchFolderTools();
      }, []);

  return (
<div className='m-[5em]'>
<h1>Here'are you tools : </h1>
{FolderTools?.map((item)=>(
   <Toolitem FolderTool={true} toolData = {item} />
))}
</div>
  )
}

export default FoldersContent
