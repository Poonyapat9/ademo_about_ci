import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter'; // Adjust the import path as necessary

import { expect, describe, it } from 'vitest'; // Add this import for expect

describe('useCounter', () => {
    it('should initialize count to 0 and val to 1', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
        expect(result.current.val).toBe(1);
    });

    it('should increment count by val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('should update val and increment by new val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(5);
        });
        act(() => {
            result.current.increment();
            result.current.increment();
        });
        expect(result.current.count).toBe(10);
    });

    it('should increment multiple times correctly', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
            result.current.increment();
        });
        expect(result.current.count).toBe(2);
    });

    it('should handle negative val', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.setVal(-3);
        });
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(-3);
    });
});