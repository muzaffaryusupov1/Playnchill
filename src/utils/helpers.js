export const unslugify = (slug) => slug.replace(/\-/g, " ")
  .replace(/\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  );

export function buildBuilder(builder, request, name) {
  builder
    .addCase(request.pending, (state) => {
      state[name].loading = true
    })
    .addCase(request.fulfilled, (state, { payload }) => {
      state[name].loading = false
      state[name].list = payload;
    })
    .addCase(request.rejected, (state) => {
      state[name].loading = false
    })
}

export const getIds = (arr) => arr && !!arr.length ? arr.split(',').map(item => Number(item)) : []
