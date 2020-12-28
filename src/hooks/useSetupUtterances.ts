import { MutableRefObject, useEffect } from 'react';

function useSetupUtterances(ref: MutableRefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (ref.current) {
      const utterancesScriptDOM = document.createElement('script');

      utterancesScriptDOM.setAttribute('src', 'https://utteranc.es/client.js');
      utterancesScriptDOM.setAttribute('repo', 'hw0k/hw0k.me');
      utterancesScriptDOM.setAttribute('issue-term', 'pathname');
      utterancesScriptDOM.setAttribute('theme', 'github-light');
      utterancesScriptDOM.setAttribute('crossorigin', 'anonymous');
      utterancesScriptDOM.setAttribute('async', '');

      ref.current.appendChild(utterancesScriptDOM);
    }
  }, []);
}

export default useSetupUtterances;
