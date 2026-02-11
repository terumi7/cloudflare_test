import { createQueueitWorker } from '@queue-it/cloudflare';

export default {
  async fetch(request, env, ctx) {
    // Queue-itの「脳みそ」を準備
    const queueitWorker = createQueueitWorker(env);
    
    // ユーザーを待合室に送るべきか判定
    const response = await queueitWorker.validateRequest(request);
    
    if (response) {
      // 判定結果（リダイレクトなど）があればそのまま返す
      return response;
    }
    
    // 判定OKなら、本来のサイトを表示する
return fetch("https://あなたのページ名.pages.dev");
  }
};
