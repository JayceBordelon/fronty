import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiHelper } from '../helpers/ApiHelper';
import { Loading } from '../helpers/AnimationHelper';
import AceEditor from 'react-ace';

// Icons 
import { VscDebugRestart } from "react-icons/vsc";
import { FaSadTear } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";


// Import necessary modes and themes from Ace
import 'ace-builds/src-noconflict/mode-javascript'; // Import the mode for the language you need (e.g., JavaScript)
import 'ace-builds/src-noconflict/theme-monokai'; // Import the theme you want to use


export default function Problem() {
  // Extract the id param from the URL
  const { id } = useParams();
  const [problem, setProblem] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [cssContent, setCssContent] = useState('');
  const [panelSize, setPanelSize] = useState(window.innerWidth / 2);
  const [code, setCode] = useState(''); // State to hold the editable code
  const dividerRef = useRef(null);

  const startResizing = (mouseDownEvent) => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', stopResizing);
    dividerRef.current.classList.add('bg-gray-500'); // Optional: Change divider color on drag
  };

  const onMouseMove = (mouseMoveEvent) => {
    setPanelSize(mouseMoveEvent.clientX);
  };

  const stopResizing = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', stopResizing);
    dividerRef.current.classList.remove('bg-gray-500'); // Reset divider color
  };

  //fetch the problem
  useEffect(() => {
    const getProblem = async () => {
      const response = await apiHelper("problems/getbyid", 'POST', { id }, {});
      setProblem(response);
    };

    getProblem();
  }, [id]);

  useEffect(() => {
    if (problem) {
      parseProblemCode(problem.code);
    }

    if (problem && problem.fix_me) {
      setCode(problem.fix_me); // Set the initial code to be the 'fix_me' part of the problem
    }
  }, [problem]);

  const parseProblemCode = (code) => {
    const splitByLanguage = code.split(",");
    splitByLanguage.forEach(lang => {
      const [name, core] = lang.split("<=>");
      console.log(core);
      if (name === "html") {
        setHtmlContent(core);
      } else if (name === "css") {
        setCssContent(core);
      }
    });
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode); // Update the state when the code is edited
    if (problem.language === 'css'){
      setCssContent(newCode);
    }
  };

  const resetSolution = () => {
    handleCodeChange(problem.fix_me);
  }
  const testSolution = () => {
    // TODO
  }
  const giveUp = () => {
    // TODO
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
      <div style={{ width: `${panelSize}px`, minWidth: '500px' }} className="bg-code-editor overflow-auto p-4 h-full w-full"  id="input">
        <div id="instructions">
          {problem ? (
            <>
            <h1 className="p-2 m-2 font-bold">{id}. {problem.name}</h1>
            <hr/>
            <h1 className="py-2 my-2 font-slightly-bold">Description</h1>
            <p className="py-2 my-2">{problem.description}</p>
            <div className="w-full" style={{ height: 'auto', display: 'flex', justifyContent: 'center' }}> {/* Set your desired width and height */}
            <AceEditor
              mode={problem.language}
              theme="monokai"
              value={code ? code : "Loading..."}
              onChange={handleCodeChange}
              name="codeEditor"
              editorProps={{ $blockScrolling: true }}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
              // style={{ width: '100%', height: '100%' }} // Ensure the editor fills the container
            />
            
          </div>
            <div style={{display: "flex", justifyContent: "space-around"}} >
              <button className="cool-button reset" onClick={()=>{resetSolution()}}><h4>Reset <VscDebugRestart /></h4></button>
              <button className="cool-button success" onClick={()=>{testSolution()}}><h4>Test <PiTestTubeFill /></h4></button>
              <button className="cool-button reveal" onClick={()=>{giveUp()}}><h4>Give up <FaSadTear /></h4></button>
            </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
        <div
          ref={dividerRef}
          onMouseDown={startResizing}
          className="cursor-col-resize bg-gray-300 w-2"
        />
        <div style={{ position: 'relative', width: `calc(100% - ${panelSize}px - 0.5rem)` }} className="bg-white" id="result">
          {problem ? (
               <>
                <style dangerouslySetInnerHTML={{ __html: cssContent }} />
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
               </>
            ) : (
              <Loading />
            )}
        </div>
      </div>
    </div>
  );
}
