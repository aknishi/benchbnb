export const fetchBenches = data => (
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data
  })
);

export const fetchBench = id => (
  $.ajax({
    method: 'GET',
    url: `api/benches/${id}`
  })
);

export const createBench = bench => (
  $.ajax({
    method: 'POST',
    url: 'api/benches',
    data: { bench }
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);
