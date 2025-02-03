```javascript
// pages/index.js
export default async function Home() {
  const { default: MyComponent } = await import('./my-component');

  return (
    <div>
      <MyComponent />
    </div>
  );
}

// my-component.js
export default function MyComponent(){
    return <div>My Component</div>
}
```