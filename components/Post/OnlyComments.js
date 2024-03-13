import { useEffect, useState } from 'react';
function OnlyPinglun({post} ){
    const postid = post?.id
    const [comments, setComments] = useState([]);

      useEffect(() => {
        fetchComments(); // 在组件加载时获取评论数据
      }, []);
    
      async function fetchComments() {
        try {
          const tgUrl = '/api/pinglunapiget';
          const response = await fetch(tgUrl, {
            method: 'POST',
            body: JSON.stringify({ postid }),
          });
          if (response.ok) {
            const data = await response.json();
            if (data.status === 'Success') {                        
              setComments(data.data.results); 
            } else if (response.status === 429) {
              const retryAfter = parseInt(response.headers.get('Retry-After'), 10) || 10; // Default to 10 seconds
              console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
              await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            } else {
              console.error('Failed to fetch comments');
            }
          } else {
            console.error('Failed to fetch comments');
          }
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }
return< span>{comments.length}</span>
}
export default OnlyPinglun
