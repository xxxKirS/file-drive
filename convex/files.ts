import { ConvexError, v } from 'convex/values';
import { mutation } from './_generated/server';

export const createFile = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identify = await ctx.auth.getUserIdentity();

    console.log(identify);

    if (!identify) {
      throw new ConvexError('Not authenticated');
    }

    await ctx.db.insert('files', {
      name: args.name,
    });
  },
});

export const getFiles = mutation({
  args: {},
  handler: async (ctx) => {
    const identify = await ctx.auth.getUserIdentity();

    console.log(identify);

    if (!identify) {
      throw new ConvexError('Not authenticated');
    }
    await ctx.db.query('files').collect();
  },
});
