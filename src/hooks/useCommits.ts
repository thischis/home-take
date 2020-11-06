import axios from 'axios';
import { useEffect, useState } from 'react';
import { CommitModel } from '../models/commit-model';

import { API_URL } from '../constants/api-url';

interface DataI {
  commits: CommitModel[];
}

export const useCommits = () => {
  const [data, setData] = useState<DataI>({ commits: [] });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const { data } = await axios.get<CommitModel[]>(API_URL);
        setData({ commits: data });
      } catch (e) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCommits();
  }, []);
  return { data, isError, isLoading };
};
