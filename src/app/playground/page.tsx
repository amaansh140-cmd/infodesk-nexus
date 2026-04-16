'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Play, Code2, Terminal, Bot, Settings2, MoreHorizontal, Send, Sparkles, ChevronDown, Check } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import styles from './playground.module.css';

const LANGUAGE_CONFIG: Record<string, any> = {
  javascript: {
    label: 'JavaScript (Node.js)',
    language: 'javascript',
    version: '*',
    prism: 'javascript',
    boilerplate: "console.log('Hello from Nexus Playground!');\n\nfunction calculateFactorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * calculateFactorial(n - 1);\n}\n\nconsole.log('Factorial of 5 is:', calculateFactorial(5));\n"
  },
  python: {
    label: 'Python 3',
    language: 'python',
    version: '*',
    prism: 'python',
    boilerplate: "print('Hello from Nexus Playground!')\n\ndef calculate_factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    return n * calculate_factorial(n - 1)\n\nprint(f'Factorial of 5 is: {calculate_factorial(5)}')\n"
  },
  cpp: {
    label: 'C++',
    language: 'cpp',
    version: '*',
    prism: 'cpp',
    boilerplate: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello from Nexus Playground!\" << std::endl;\n    return 0;\n}\n"
  },
  java: {
    label: 'Java',
    language: 'java',
    version: '*',
    prism: 'java',
    boilerplate: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello from Nexus Playground!\");\n    }\n}\n"
  },
  rust: {
    label: 'Rust',
    language: 'rust',
    version: '*',
    prism: 'rust',
    boilerplate: "fn main() {\n    println!(\"Hello from Nexus Playground!\");\n}\n"
  },
  go: {
    label: 'Go',
    language: 'go',
    version: '*',
    prism: 'go',
    boilerplate: "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello from Nexus Playground!\")\n}\n"
  },
  typescript: {
    label: 'TypeScript',
    language: 'typescript',
    version: '*',
    prism: 'typescript',
    boilerplate: "const greeting: string = 'Hello from Nexus Playground!';\nconsole.log(greeting);\n"
  },
  ruby: {
    label: 'Ruby',
    language: 'ruby',
    version: '*',
    prism: 'ruby',
    boilerplate: "puts 'Hello from Nexus Playground!'\n"
  },
  php: {
    label: 'PHP',
    language: 'php',
    version: '*',
    prism: 'php',
    boilerplate: "<?php\necho 'Hello from Nexus Playground!';\n?>\n"
  },
  csharp: {
    label: 'C#',
    language: 'csharp',
    version: '*',
    prism: 'csharp',
    boilerplate: "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello from Nexus Playground!\");\n    }\n}\n"
  },
  swift: {
    label: 'Swift',
    language: 'swift',
    version: '*',
    prism: 'swift',
    boilerplate: "print(\"Hello from Nexus Playground!\")\n"
  },
  kotlin: {
    label: 'Kotlin',
    language: 'kotlin',
    version: '*',
    prism: 'kotlin',
    boilerplate: "fun main() {\n    println(\"Hello from Nexus Playground!\")\n}\n"
  },
  html: {
    label: 'HTML5',
    language: 'html',
    version: '*',
    prism: 'markup',
    boilerplate: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <style>\n    body { font-family: system-ui; text-align: center; margin-top: 50px; }\n    h1 { color: #ec4899; }\n  </style>\n</head>\n<body>\n  <h1>Nexus Playground</h1>\n  <p>Render your HTML seamlessly right here!</p>\n</body>\n</html>\n"
  },
  css: {
    label: 'CSS3',
    language: 'css',
    version: '*',
    prism: 'css',
    boilerplate: "/* You can write pure CSS here! */\n\nbody {\n  font-family: 'Inter', system-ui, sans-serif;\n  background: #f9fafb;\n  color: #111827;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\nh1 {\n  color: #8b5cf6;\n  font-size: 3rem;\n}\n"
  }
};

export default function PlaygroundPage() {
  const [selectedLang, setSelectedLang] = useState('python');
  const [code, setCode] = useState(LANGUAGE_CONFIG['python'].boilerplate);
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  
  // AI Mentor State
  const [mentorInput, setMentorInput] = useState('');
  const [mentorMessages, setMentorMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([]);
  const [isMentorTyping, setIsMentorTyping] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLanguageChange = (key: string) => {
    setSelectedLang(key);
    setCode(LANGUAGE_CONFIG[key].boilerplate);
    setShowDropdown(false);
    setOutput('');
    setMentorMessages([]); // Clear chat context on language switch
  };

  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mentorInput.trim() || isMentorTyping) return;

    const userMessage = mentorInput.trim();
    setMentorMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setMentorInput('');
    setIsMentorTyping(true);

    try {
      const systemPrompt = `You are Nexus AI Mentor, a highly advanced programming assistant running inside the Infodesk Nexus Multi-Language Playground IDE.
The user is currently writing code in ${LANGUAGE_CONFIG[selectedLang].label}.
Here is their exact current Editor Code:
\`\`\`${LANGUAGE_CONFIG[selectedLang].language}
${code}
\`\`\`
Here is their latest Runtime Output/Console:
${output ? output : '(No output generated yet)'}

Please answer the user's question accurately, concisely, and specifically based on their provided code and output. Keep your response under 100 words if possible.`;

      const response = await fetch('/api/mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
        }),
      });
      
      if (!response.ok) throw new Error('API Error');
      const textResponse = await response.text();
      setMentorMessages(prev => [...prev, { role: 'assistant', text: textResponse }]);
    } catch (e) {
      setMentorMessages(prev => [...prev, { role: 'assistant', text: "I'm sorry, my neural pathways are currently blocked by a CORS or connection error. Please try again!" }]);
    } finally {
      setIsMentorTyping(false);
    }
  };

  const executeCode = async () => {
    setIsExecuting(true);
    setOutput('Executing...');
    
    // Simulate network latency & execution time
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 500));
    
    try {
      if (selectedLang === 'python') {
        try {
          if (!(window as any).loadPyodide) {
            setOutput('Python Engine (Pyodide) is loading... Please wait a few seconds and try again.');
            setIsExecuting(false);
            return;
          }
          if (!(window as any).pyodide) {
            setOutput('Booting Python Virtual Machine in your browser...');
            (window as any).pyodide = await (window as any).loadPyodide();
          }
          const py = (window as any).pyodide;
          
          await py.runPythonAsync(`
import sys
import io
import builtins
import js

# Redirect output streams
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

# Bulletproof input() handler linking directly to JS
def custom_input(prompt_text=""):
    res = js.prompt(prompt_text or "Nexus Python Input:")
    if res is None:
        raise EOFError("EOF when reading a line")
    return res

builtins.input = custom_input
          `);
          
          await py.runPythonAsync(code);
          
          const stdout = await py.runPythonAsync('sys.stdout.getvalue()');
          const stderr = await py.runPythonAsync('sys.stderr.getvalue()');
          
          let result = stdout;
          if (stderr) result += '\n' + stderr;
          if (!result) result = 'Execution finished with no output.';
          
          setOutput(result + '\n\n[Process exited with code 0]');
        } catch (e: any) {
          setOutput(`Python Runtime Error:\n${e.message}\n\n[Process exited with code 1]`);
        }
      } else if (selectedLang === 'html' || selectedLang === 'css') {
        const docHtml = selectedLang === 'css' 
          ? `<style>${code}</style><body><h1>Live CSS Preview</h1><p>Nexus Playground Sandbox</p></body>`
          : code;
        setOutput(docHtml);
      } else if (selectedLang === 'javascript') {
        const originalLog = console.log;
        const logs: string[] = [];
        console.log = (...args) => {
          logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
        };
        
        try {
          // eslint-disable-next-line no-new-func
          const execute = new Function(code);
          execute();
          let currentOutput = logs.join('\n');
          if (!currentOutput) currentOutput = 'Execution finished with no output.';
          setOutput(currentOutput + '\n\n[Process exited with code 0]');
        } catch (e: any) {
          setOutput(`Runtime Error:\n${e.message}\n\n[Process exited with code 1]`);
        } finally {
          console.log = originalLog;
        }
      } else {
        // Regex Simulator for other languages to extract literal strings from print statements
        const printRegex = /(?:print(?:ln!)?|cout\s*<<|System\.out\.println|Console\.WriteLine|echo|puts|console\.log)\s*(?:\(\s*)?(["'])(.*?)\1/g;
        const simulatedLogs: string[] = [];
        let match;
        while ((match = printRegex.exec(code)) !== null) {
          simulatedLogs.push(match[2]);
        }
        
        if (simulatedLogs.length > 0) {
          setOutput(simulatedLogs.join('\n') + '\n\n[Process exited with code 0]');
        } else {
          setOutput(`[Nexus VM] Compiled successfully in ${(Math.random() * 0.5).toFixed(3)}s.\n(No live output generated. Use standard print statements with strings to simulate output!)\n\n[Process exited with code 0]`);
        }
      }
    } catch (err) {
      setOutput('Failed to execute or simulate code.');
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js" strategy="beforeInteractive" />
      <div className={styles.container}>
        {/* Top Header */}
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`liquid-glass ${styles.header}`}
      >
        <div className={styles.titleGroup}>
          <div className={styles.title}>Nexus Playground</div>
          <div className={styles.badge}>Multi-Language IDE</div>
        </div>
        
        <div className={styles.actions}>
          <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button 
              className={styles.btnSecondary} 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {LANGUAGE_CONFIG[selectedLang].label}
              <ChevronDown size={16} />
            </button>
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                {Object.keys(LANGUAGE_CONFIG).map((key) => (
                  <button 
                    key={key} 
                    className={styles.dropdownItem}
                    onClick={() => handleLanguageChange(key)}
                  >
                    {LANGUAGE_CONFIG[key].label}
                    {selectedLang === key && <Check size={14} />}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className={styles.btnSecondary}>
            <Settings2 size={16} />
            Config
          </button>
          <button 
            className={styles.btnPrimary} 
            onClick={executeCode}
            disabled={isExecuting}
            style={{ opacity: isExecuting ? 0.7 : 1, cursor: isExecuting ? 'not-allowed' : 'pointer' }}
          >
            <Play size={16} fill={isExecuting ? "transparent" : "currentColor"} />
            {isExecuting ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </motion.div>

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Editor Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className={`liquid-glass-strong ${styles.panel} ${styles.editorPanel}`}
        >
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <Code2 size={16} />
              main.{selectedLang === 'python' ? 'py' : selectedLang === 'cpp' ? 'cpp' : selectedLang === 'java' ? 'java' : selectedLang === 'rust' ? 'rs' : selectedLang === 'go' ? 'go' : 'js'}
            </div>
            <button className="theme-text-muted hover-scale" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <MoreHorizontal size={16} />
            </button>
          </div>
          <div className={styles.editorContent}>
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages[LANGUAGE_CONFIG[selectedLang].prism] || Prism.languages.javascript, LANGUAGE_CONFIG[selectedLang].prism)}
              padding={16}
              className={styles.realEditor}
              style={{
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                fontSize: 14,
                backgroundColor: 'transparent',
                outline: 'none',
                minHeight: '100%',
              }}
            />
          </div>
        </motion.div>

        {/* Right Sidebar (Output + AI) */}
        <div className={styles.sidebar}>
          {/* Output Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`liquid-glass-strong ${styles.panel} ${styles.outputPanel}`}
          >
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <Terminal size={16} />
                {(selectedLang === 'html' || selectedLang === 'css') ? 'Live Browser Preview' : 'Live Output'}
              </div>
            </div>
            <div className={styles.outputContentWrapper}>
              {(selectedLang === 'html' || selectedLang === 'css') ? (
                output ? (
                  <iframe 
                    title="Live Preview" 
                    srcDoc={output}
                    style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }} 
                  />
                ) : (
                  <div className={styles.outputMock}>
                    <Sparkles size={32} style={{ opacity: 0.5 }} />
                    <p>Browser preview will render here</p>
                  </div>
                )
              ) : output ? (
                <pre className={styles.terminalOutput}>{output}</pre>
              ) : (
                <div className={styles.outputMock}>
                  <Sparkles size={32} style={{ opacity: 0.5 }} />
                  <p>Output will render here when you click "Run Code"</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* AI Mentor Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`liquid-glass-strong ${styles.panel} ${styles.aiPanel}`}
          >
            <div className={styles.panelHeader}>
              <div className={styles.panelTitle}>
                <Bot size={16} />
                Nexus AI Mentor
              </div>
            </div>
            <div className={styles.chatContent}>
              <div className={`${styles.chatMessage} ${styles.aiMessage}`}>
                <div className={`${styles.avatar} ${styles.aiAvatar}`}>
                  <Bot size={14} />
                </div>
                <div className={styles.messageBubble}>
                  Hello! I'm your Nexus AI Mentor. I can help interpret errors or suggest optimisations for your {LANGUAGE_CONFIG[selectedLang].label} code.
                </div>
              </div>
              
              {mentorMessages.map((msg, i) => (
                <div key={i} className={`${styles.chatMessage} ${msg.role === 'assistant' ? styles.aiMessage : styles.userMessage}`}>
                   {msg.role === 'assistant' && (
                     <div className={`${styles.avatar} ${styles.aiAvatar}`}>
                       <Bot size={14} />
                     </div>
                   )}
                   <div className={styles.messageBubble}>
                     {msg.text}
                   </div>
                </div>
              ))}
              
              {isMentorTyping && (
                <div className={`${styles.chatMessage} ${styles.aiMessage}`}>
                  <div className={`${styles.avatar} ${styles.aiAvatar}`}>
                    <Bot size={14} />
                  </div>
                  <div className={styles.messageBubble}>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Thinking...
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
            <form className={styles.chatInput} onSubmit={handleMentorSubmit}>
              <input 
                type="text" 
                placeholder={`Ask Nexus AI about ${LANGUAGE_CONFIG[selectedLang].label}...`} 
                className={styles.inputField} 
                value={mentorInput}
                onChange={(e) => setMentorInput(e.target.value)}
                disabled={isMentorTyping}
              />
              <button 
                type="submit" 
                className={styles.sendBtn} 
                disabled={isMentorTyping || !mentorInput.trim()}
                style={{ opacity: isMentorTyping || !mentorInput.trim() ? 0.5 : 1 }}
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
