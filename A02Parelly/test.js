QUnit.test('Testing invisible function with inputs', function(assert) {
    assert.equal(cubes.invisible(3, 4, 5), 6, 'Tested with three relatively small positive numbers');
});