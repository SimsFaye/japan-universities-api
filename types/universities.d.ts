interface University {
  name: string;
  // ... 其他属性
}

declare module '*.json' {
  const value: University[];
  export default value;
} 