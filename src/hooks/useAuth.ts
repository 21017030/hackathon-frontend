'use client';

import { useState, useCallback, useEffect } from 'react';
import { STORAGE_KEY } from '@/constants';
import type { User } from '@/types';

/**
 * 사용자 인증 상태를 관리하는 훅.
 * sessionStorage에서 사용자 정보를 읽어오고 저장/삭제를 담당합니다.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      // 파싱 실패 시 무시
    }
  }, []);

  /** 사용자 정보를 sessionStorage와 state에 저장합니다. */
  const saveUser = useCallback((u: User) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUser(u);
  }, []);

  /** 로그아웃: sessionStorage에서 사용자 정보를 삭제합니다. */
  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return { user, saveUser, logout };
}
