## [2.13.18](https://github.com/randytarampi/pseudolocalize/compare/v2.13.17...v2.13.18) (2026-06-28)


### Bug Fixes

* **ci:** add environment: production, fix stale .releaserc assets. Travis references begone. 🪦 ([b7b554c](https://github.com/randytarampi/pseudolocalize/commit/b7b554cd2da3b0bf42ef67202274ee4329e21642))
* **ci:** add Node 20/22/24/26 test matrix. We say >=20, let's prove it. 🧪 ([f276e75](https://github.com/randytarampi/pseudolocalize/commit/f276e753f39cb6ac8a15193f630ec996829c01e0))
* **ci:** disable Yarn hardened mode — portal deps need lockfile resolution in PR CI. 🤝 ([70e271d](https://github.com/randytarampi/pseudolocalize/commit/70e271da8be16542eec1dbf33af0c0fa6ce6a969))
* **ci:** disable yarn hardening and hound eslint ([aa32a57](https://github.com/randytarampi/pseudolocalize/commit/aa32a574a26a3f4a23be48be486f537b65648051))
* **ci:** fetch full git history for --since to work. Shallow clones don't have master ref. 🤦‍♂️ ([1f0776b](https://github.com/randytarampi/pseudolocalize/commit/1f0776b26e668e45928d0d2a672f8ccd901492d0))
* **ci:** regenerate yarn.lock. CI was trying to modify it, now it won't need to. 🔄 ([61f4c40](https://github.com/randytarampi/pseudolocalize/commit/61f4c40e5d157f034228b1c20f62ed423ebd9acc))
* **ci:** relax yarn install flags ([043ad1e](https://github.com/randytarampi/pseudolocalize/commit/043ad1ee21dab1b39e21de5507d335128bcf8ab6))
* **lint:** use double quotes. ESLint is picky. 🤷‍♂️ ([fcdd1de](https://github.com/randytarampi/pseudolocalize/commit/fcdd1dea7258a546e6761828339a6bb61727e55c))
* package.json & package-lock.json to reduce vulnerabilities ([ec15a48](https://github.com/randytarampi/pseudolocalize/commit/ec15a4815bb210718ee0b79e3d739701871f44d4))
* package.json & package-lock.json to reduce vulnerabilities ([8f08524](https://github.com/randytarampi/pseudolocalize/commit/8f08524fb8000fe9237f93c3cb3e646d88405866))
* package.json & package-lock.json to reduce vulnerabilities ([7252529](https://github.com/randytarampi/pseudolocalize/commit/7252529acfec73ab3455c6b1480d94e22ad6df73))
* package.json & package-lock.json to reduce vulnerabilities ([3be437e](https://github.com/randytarampi/pseudolocalize/commit/3be437e4092d5322890801fc0869f71c8aa972a5))
* package.json & package-lock.json to reduce vulnerabilities ([93e648b](https://github.com/randytarampi/pseudolocalize/commit/93e648b88fde164a1a360148bb22f4855822b265))
* package.json & package-lock.json to reduce vulnerabilities ([54269e8](https://github.com/randytarampi/pseudolocalize/commit/54269e84fdce676900feba9d40214b3feef885b6))
* upgrade @semantic-release/git from 9.0.0 to 9.0.1 ([d9ebb45](https://github.com/randytarampi/pseudolocalize/commit/d9ebb459f3d4b543adc9591492c1ca7bb15d80f2))
* upgrade chai from 4.2.0 to 4.3.0 ([89f7cd3](https://github.com/randytarampi/pseudolocalize/commit/89f7cd349d0bce6591928b927542d42dfd38ba41))
* upgrade chai from 4.3.0 to 4.3.1 ([b929154](https://github.com/randytarampi/pseudolocalize/commit/b929154fb9a02befea0a3df1fa3fc006b58e4e03))
* upgrade chai from 4.3.1 to 4.3.3 ([3e0b236](https://github.com/randytarampi/pseudolocalize/commit/3e0b236291ab376b3c4e01c0f097a79194de9fee))
* upgrade chai from 4.3.3 to 4.3.4 ([3b5f5cd](https://github.com/randytarampi/pseudolocalize/commit/3b5f5cdddf7ecda8bb35c8520a5dd7075a133b01))
* upgrade commander from 6.2.0 to 6.2.1 ([6328cb5](https://github.com/randytarampi/pseudolocalize/commit/6328cb533a57fffebafb91a54d2228a6729e2933))
* upgrade coveralls from 3.1.0 to 3.1.1 ([f4c0c90](https://github.com/randytarampi/pseudolocalize/commit/f4c0c90e898ff977dd41bdb5fcc0bd4a4491befa))
* upgrade cross-env from 7.0.2 to 7.0.3 ([e218402](https://github.com/randytarampi/pseudolocalize/commit/e2184026b89c0aebd3ea7631b0ea1f7f7faedb31))
* upgrade eslint-plugin-import from 2.22.1 to 2.23.0 ([5b0d868](https://github.com/randytarampi/pseudolocalize/commit/5b0d868d78ad14a7fca4cfeb9b6bf52fef2006c1))
* upgrade eslint-plugin-import from 2.23.0 to 2.23.2 ([1779511](https://github.com/randytarampi/pseudolocalize/commit/177951166393557bfd8fb5c1368ab44944aaa13e))
* upgrade eslint-plugin-import from 2.23.2 to 2.23.3 ([496e8e5](https://github.com/randytarampi/pseudolocalize/commit/496e8e5087b19e5c101f3f4a50d171ddedc83d37))
* upgrade eslint-plugin-import from 2.23.3 to 2.23.4 ([7dc58b2](https://github.com/randytarampi/pseudolocalize/commit/7dc58b2e0d05add9a0187bbdca156051aaee11d4))
* upgrade mocha from 8.2.1 to 8.3.0 ([409ff01](https://github.com/randytarampi/pseudolocalize/commit/409ff0182581ab4b38a6a938915cebd6d85d1d98))
* upgrade mocha from 8.3.0 to 8.3.1 ([a943ba3](https://github.com/randytarampi/pseudolocalize/commit/a943ba33304af3a9259d188f21e24decea2a3285))
* upgrade mocha from 8.3.1 to 8.3.2 ([d154efa](https://github.com/randytarampi/pseudolocalize/commit/d154efa2656a998185f77d56a70eea0edc3dbca4))
* upgrade mocha from 8.3.2 to 8.4.0 ([fafc0fd](https://github.com/randytarampi/pseudolocalize/commit/fafc0fdf322d5031a500a3357c1c68ea98aab651))
* upgrade semantic-release from 17.2.4 to 17.3.0 ([fb51979](https://github.com/randytarampi/pseudolocalize/commit/fb51979ac880d172e62b1f716bdbc75f25d74fac))
* upgrade semantic-release from 17.3.1 to 17.3.2 ([05e8b21](https://github.com/randytarampi/pseudolocalize/commit/05e8b21a4e8f33d833fcc1a5890640acaecb516b))
* upgrade semantic-release from 17.3.2 to 17.3.3 ([3efc426](https://github.com/randytarampi/pseudolocalize/commit/3efc4260c00098e5327615b3ed3e7286b85f09ac))
* upgrade semantic-release from 17.3.3 to 17.3.7 ([847553d](https://github.com/randytarampi/pseudolocalize/commit/847553dadff7d0009b3ed14cf40506a34a6ccc6a))
* upgrade semantic-release from 17.3.8 to 17.3.9 ([5aafda9](https://github.com/randytarampi/pseudolocalize/commit/5aafda9a3fd16e5eacb0107c0dd158fdcde6e476))
* upgrade semantic-release from 17.3.9 to 17.4.0 ([51bde90](https://github.com/randytarampi/pseudolocalize/commit/51bde9009a6d691c1edced76d3de1f8016b6299c))
* upgrade semantic-release from 17.4.0 to 17.4.1 ([824e584](https://github.com/randytarampi/pseudolocalize/commit/824e58401dff173c9334ca601589eaed2f3b1b89))
* upgrade semantic-release from 17.4.1 to 17.4.2 ([4ee54b7](https://github.com/randytarampi/pseudolocalize/commit/4ee54b7b66275f49bc1985bd09550e47d547ed6f))
* upgrade semantic-release from 17.4.2 to 17.4.3 ([169f91e](https://github.com/randytarampi/pseudolocalize/commit/169f91e77d19ce71a17c0b812410bb12cc2ccdac))
* upgrade semantic-release from 17.4.3 to 17.4.4 ([dac6016](https://github.com/randytarampi/pseudolocalize/commit/dac601670280498f4e9306b6ead7dcab9a868ff1))
* upgrade sinon from 9.2.1 to 9.2.2 ([206594e](https://github.com/randytarampi/pseudolocalize/commit/206594e4a4356a457817a10dba6f34deac676242))
* upgrade sinon from 9.2.2 to 9.2.3 ([f546a97](https://github.com/randytarampi/pseudolocalize/commit/f546a97325c3871b0d8e68f6376025fca9de3f72))
* upgrade sinon from 9.2.3 to 9.2.4 ([71d8f3f](https://github.com/randytarampi/pseudolocalize/commit/71d8f3fde988b05b47bb0ae513da9887f03b7dc2))
* upgrade snyk from 1.430.0 to 1.430.2 ([963072e](https://github.com/randytarampi/pseudolocalize/commit/963072e88ab4232b6fb3b354290c3fb23af1bbde))
* upgrade snyk from 1.430.2 to 1.431.2 ([d83af38](https://github.com/randytarampi/pseudolocalize/commit/d83af38c5b1d4a183c806681c30192ef02b1d070))
* upgrade snyk from 1.431.2 to 1.431.4 ([74dcc5b](https://github.com/randytarampi/pseudolocalize/commit/74dcc5b8281833195ba74bdfb080b8bd81f70bfe))
* upgrade snyk from 1.431.4 to 1.433.0 ([2519932](https://github.com/randytarampi/pseudolocalize/commit/2519932cf441687195a75b7b6dda817d50ee4dc0))
* upgrade snyk from 1.433.0 to 1.434.0 ([bf3ef8e](https://github.com/randytarampi/pseudolocalize/commit/bf3ef8e03934ee2c9cbcfc5222d7e4dcb4a4b4a6))
* upgrade snyk from 1.434.0 to 1.434.2 ([1942266](https://github.com/randytarampi/pseudolocalize/commit/1942266d63c94102562395afde26260d60256692))
* upgrade snyk from 1.434.2 to 1.434.3 ([5d2cb21](https://github.com/randytarampi/pseudolocalize/commit/5d2cb2196a06e19bb9390843726fb695e2164e44))
* upgrade snyk from 1.434.3 to 1.436.0 ([11abac4](https://github.com/randytarampi/pseudolocalize/commit/11abac4b3be8174ce23e16c8038b6d80fe7c5140))
* upgrade snyk from 1.436.0 to 1.437.0 ([85a444a](https://github.com/randytarampi/pseudolocalize/commit/85a444aaf3d7d9314fbb4e0a7cfd6f8ab8f7a147))
* upgrade snyk from 1.437.0 to 1.437.1 ([c0c3425](https://github.com/randytarampi/pseudolocalize/commit/c0c342578290660f18a5dd8223dc870935c1e28d))
* upgrade snyk from 1.437.1 to 1.437.2 ([e23c136](https://github.com/randytarampi/pseudolocalize/commit/e23c1362a3d06446605adbf2ef405dbee0f475f4))
* upgrade snyk from 1.437.2 to 1.437.3 ([cd50c23](https://github.com/randytarampi/pseudolocalize/commit/cd50c23662e41455ee7dbf36b97872fc35ff869a))
* upgrade snyk from 1.437.3 to 1.437.4 ([a2c5843](https://github.com/randytarampi/pseudolocalize/commit/a2c5843b5917d4180c7418b9c0633121a3b122ef))
* upgrade snyk from 1.437.4 to 1.438.0 ([64ca9d2](https://github.com/randytarampi/pseudolocalize/commit/64ca9d2b11691b2106f91d993b3fb60b22f901a9))
* upgrade snyk from 1.438.0 to 1.439.0 ([3c2fd67](https://github.com/randytarampi/pseudolocalize/commit/3c2fd676f2b18d8477f3a45e93e4d7dadbfe42fc))
* upgrade snyk from 1.439.0 to 1.439.1 ([70567fb](https://github.com/randytarampi/pseudolocalize/commit/70567fbb850054088b44bbbc159a4632bad323ac))
* upgrade snyk from 1.439.1 to 1.458.0 ([56071bc](https://github.com/randytarampi/pseudolocalize/commit/56071bcdfea817be034781cb6e57e9261b3a4ab3))
* upgrade snyk from 1.458.0 to 1.459.0 ([4b0af5e](https://github.com/randytarampi/pseudolocalize/commit/4b0af5eca0d962b73e1c075f9ef7d09d057b9d53))
* upgrade snyk from 1.459.0 to 1.460.0 ([3a549a7](https://github.com/randytarampi/pseudolocalize/commit/3a549a7fe2c6f02fdfd0d8c5b1822d5ff912b2b3))
* upgrade snyk from 1.460.0 to 1.461.0 ([5b890b6](https://github.com/randytarampi/pseudolocalize/commit/5b890b6ecd3cdd4dbe8b54d613cb83ce1acd89e5))
* upgrade snyk from 1.461.0 to 1.462.0 ([31f5705](https://github.com/randytarampi/pseudolocalize/commit/31f5705cd101c9afa822874e4957f67310a66cb6))
* upgrade snyk from 1.462.0 to 1.464.0 ([19b9b07](https://github.com/randytarampi/pseudolocalize/commit/19b9b079369c7672294c003b54e7522dcff7ba29))
* upgrade snyk from 1.464.0 to 1.467.0 ([01293ba](https://github.com/randytarampi/pseudolocalize/commit/01293ba0eac5e0386f590a0da7cf554b8c5a9041))
* upgrade snyk from 1.467.0 to 1.471.0 ([eb75593](https://github.com/randytarampi/pseudolocalize/commit/eb75593219f11486033743a0e40c8f9f793f4618))
* upgrade snyk from 1.471.0 to 1.476.0 ([6a440c5](https://github.com/randytarampi/pseudolocalize/commit/6a440c50d3a5d38930303ea65c47bdc86485bc5d))
* upgrade snyk from 1.476.0 to 1.486.0 ([5bf0ffd](https://github.com/randytarampi/pseudolocalize/commit/5bf0ffdfd41637d66f125233d4abc458675ad111))
* upgrade snyk from 1.486.0 to 1.489.0 ([ba3b16f](https://github.com/randytarampi/pseudolocalize/commit/ba3b16f6fc064b0d81153a0f3e9911a6d6608021))
* upgrade snyk from 1.489.0 to 1.491.0 ([dd503f8](https://github.com/randytarampi/pseudolocalize/commit/dd503f82cd08cb1b6c0015c9e12f7479942e29bc))
* upgrade snyk from 1.491.0 to 1.495.0 ([04baa40](https://github.com/randytarampi/pseudolocalize/commit/04baa40ee6e6ec3e95cc8e26952569977dc81a76))
* upgrade snyk from 1.495.0 to 1.500.0 ([fa21c05](https://github.com/randytarampi/pseudolocalize/commit/fa21c0567242a2e94280fc129fca75ae1d0bff3f))
* upgrade snyk from 1.500.0 to 1.502.0 ([a1225a7](https://github.com/randytarampi/pseudolocalize/commit/a1225a7dcda761025e9142bc19c3d5ba67187527))
* upgrade snyk from 1.502.0 to 1.509.0 ([56bb434](https://github.com/randytarampi/pseudolocalize/commit/56bb434dc66a48b298adb0d164a2ac12919678e3))
* upgrade snyk from 1.509.0 to 1.511.0 ([73a5c75](https://github.com/randytarampi/pseudolocalize/commit/73a5c752c8c2062d66bacc0129d1e7717000d9d3))
* upgrade snyk from 1.511.0 to 1.518.0 ([8f5bf0e](https://github.com/randytarampi/pseudolocalize/commit/8f5bf0effa6524f4112e27652f31db2d8438ed25))
* upgrade snyk from 1.518.0 to 1.520.0 ([5afe195](https://github.com/randytarampi/pseudolocalize/commit/5afe195a10a2b7cd2573deeafeb15f7387475eb5))
* upgrade snyk from 1.520.0 to 1.526.0 ([fb3e244](https://github.com/randytarampi/pseudolocalize/commit/fb3e24494c5f1397f0674310b200b2b18e9b750c))
* upgrade snyk from 1.526.0 to 1.528.0 ([94cd3f4](https://github.com/randytarampi/pseudolocalize/commit/94cd3f42fcbab68adc079083dcbeae1b4e5984b5))
* upgrade snyk from 1.528.0 to 1.529.0 ([9209bdc](https://github.com/randytarampi/pseudolocalize/commit/9209bdc321a8014929847d817777e14f4023475f))
* upgrade snyk from 1.529.0 to 1.530.0 ([82d360c](https://github.com/randytarampi/pseudolocalize/commit/82d360c7a93ae03d220fffff3bfc6ce3d5d1a4e0))
* upgrade snyk from 1.530.0 to 1.532.0 ([dd1b35f](https://github.com/randytarampi/pseudolocalize/commit/dd1b35fdd14f735caed4ede97f169803710c4259))
* upgrade snyk from 1.532.0 to 1.541.0 ([52f17af](https://github.com/randytarampi/pseudolocalize/commit/52f17afe64d8ac42e44277ca87b57e6ea001d487))
* upgrade snyk from 1.541.0 to 1.543.0 ([fb35b94](https://github.com/randytarampi/pseudolocalize/commit/fb35b94affd85f5422023161d7287a9bf277719f))
* upgrade snyk from 1.543.0 to 1.550.0 ([de9c44f](https://github.com/randytarampi/pseudolocalize/commit/de9c44f563d5329567e6b504c0f3141b5e64613f))
* upgrade snyk from 1.550.0 to 1.551.0 ([126ea9d](https://github.com/randytarampi/pseudolocalize/commit/126ea9d6830d5330665535cd6be31be82cb5a661))
* upgrade snyk from 1.551.0 to 1.557.0 ([3179e3e](https://github.com/randytarampi/pseudolocalize/commit/3179e3ee30bcae048c67ec1d3085c0db11d43bae))
* upgrade snyk from 1.557.0 to 1.563.0 ([170ba7a](https://github.com/randytarampi/pseudolocalize/commit/170ba7a71190e662a45121c82c826d1ef51bc709))
* upgrade snyk from 1.563.0 to 1.564.0 ([bcb53c6](https://github.com/randytarampi/pseudolocalize/commit/bcb53c63db7f9a670ebf9aa6255c3d8dbd94032c))
* upgrade snyk from 1.564.0 to 1.570.0 ([8bf9433](https://github.com/randytarampi/pseudolocalize/commit/8bf9433d694f99ff6c8e5b76bbd43d6cc3ec88b8))
* upgrade snyk from 1.570.0 to 1.575.0 ([b72fc73](https://github.com/randytarampi/pseudolocalize/commit/b72fc738d7cf6b1cb443ac7ecac0d4021f108a6e))
* upgrade snyk from 1.575.0 to 1.586.0 ([ef6f8e5](https://github.com/randytarampi/pseudolocalize/commit/ef6f8e53749012ee59c67173401a04db8934a283))
* upgrade snyk from 1.586.0 to 1.587.0 ([694f29f](https://github.com/randytarampi/pseudolocalize/commit/694f29ff1edc4f1259cd0b84c3f2d583103dc646))
* upgrade snyk from 1.587.0 to 1.590.0 ([ce7316e](https://github.com/randytarampi/pseudolocalize/commit/ce7316ef6658e18ede2c37ec68e5b37f63cef0a5))
* upgrade snyk from 1.590.0 to 1.592.0 ([a0b9f2f](https://github.com/randytarampi/pseudolocalize/commit/a0b9f2f7d5d15c9a71cc6fe93f44488187b0689c))
* upgrade snyk from 1.592.0 to 1.595.0 ([eca7d41](https://github.com/randytarampi/pseudolocalize/commit/eca7d411312f1449e9108a22cf30c4269a28335d))
* upgrade snyk from 1.595.0 to 1.596.0 ([543e298](https://github.com/randytarampi/pseudolocalize/commit/543e2981b6cae4ff0af36e9a7f0fb82370900707))
* upgrade snyk from 1.596.0 to 1.604.0 ([f6cbab4](https://github.com/randytarampi/pseudolocalize/commit/f6cbab4ec67a01b1a605cb2242d3d2387eba6725))
* upgrade snyk from 1.604.0 to 1.605.0 ([880b454](https://github.com/randytarampi/pseudolocalize/commit/880b4548b05da47a66d8757b45513cc56b8446e0))
* upgrade snyk from 1.605.0 to 1.616.0 ([ab95395](https://github.com/randytarampi/pseudolocalize/commit/ab95395ce1cff69439ffb392fc54ea0a6e9291b8))
* upgrade snyk from 1.616.0 to 1.618.0 ([039d38b](https://github.com/randytarampi/pseudolocalize/commit/039d38b6f4d88b3d1dbb2e646d0cd403cb4a17ad))
* upgrade snyk from 1.618.0 to 1.620.0 ([6664f5f](https://github.com/randytarampi/pseudolocalize/commit/6664f5f77510a6be76bffb30d7f042c38e3c1398))
* upgrade snyk from 1.620.0 to 1.621.0 ([0d3d80f](https://github.com/randytarampi/pseudolocalize/commit/0d3d80f268e10564dada4961c25e4b9f5a1cb75f))
* upgrade snyk from 1.621.0 to 1.622.0 ([f8fc1c2](https://github.com/randytarampi/pseudolocalize/commit/f8fc1c2ff44d7abf8b9de65340edf82a6571f466))
* upgrade snyk from 1.622.0 to 1.623.0 ([5433308](https://github.com/randytarampi/pseudolocalize/commit/5433308ab24cdda5492a443002758a276e2c5a37))
* upgrade snyk from 1.623.0 to 1.624.0 ([572ad42](https://github.com/randytarampi/pseudolocalize/commit/572ad424611b03fb27a6d61e8262dd60268acf0e))
* upgrade snyk from 1.624.0 to 1.628.0 ([be435e3](https://github.com/randytarampi/pseudolocalize/commit/be435e353e35939c05fd2afc2f2e6fd2a8729085))
* upgrade snyk from 1.628.0 to 1.653.0 ([de3c2ec](https://github.com/randytarampi/pseudolocalize/commit/de3c2ecf407ea0bc4e73abce89db6ca35e07e7fc))
* upgrade snyk from 1.653.0 to 1.655.0 ([8452982](https://github.com/randytarampi/pseudolocalize/commit/8452982e669c5f300e6844400d4f6a4959789241))
* upgrade snyk from 1.655.0 to 1.658.0 ([5d72b8e](https://github.com/randytarampi/pseudolocalize/commit/5d72b8e1f7eff458aceada10680074647ea947e7))
* upgrade snyk from 1.658.0 to 1.660.0 ([c3521f3](https://github.com/randytarampi/pseudolocalize/commit/c3521f3f75d47745336bbe79abd1b83b14efd17c))

## [2.13.17](https://github.com/randytarampi/pseudolocalize/compare/v2.13.16...v2.13.17) (2020-10-31)


### Bug Fixes

* upgrade commander from 6.1.0 to 6.2.0 ([96bca57](https://github.com/randytarampi/pseudolocalize/commit/96bca57b21aa652a86ee23d56cb588ca2ba8f11d))
* upgrade semantic-release from 17.2.1 to 17.2.2 ([4348288](https://github.com/randytarampi/pseudolocalize/commit/4348288a9e4dc0081958d5f93246ef13e3fb8596))
* upgrade snyk from 1.416.0 to 1.419.0 ([aa43828](https://github.com/randytarampi/pseudolocalize/commit/aa43828b0ec145f2c04c05210497dead5af987a9))

## [2.13.16](https://github.com/randytarampi/pseudolocalize/compare/v2.13.15...v2.13.16) (2020-10-21)


### Bug Fixes

* upgrade snyk from 1.415.0 to 1.416.0 ([4c08b2d](https://github.com/randytarampi/pseudolocalize/commit/4c08b2dfd2e7e4d74169b24101b21bcd68cd27d6))

## [2.13.15](https://github.com/randytarampi/pseudolocalize/compare/v2.13.14...v2.13.15) (2020-10-20)


### Bug Fixes

* upgrade snyk from 1.414.1 to 1.415.0 ([5615219](https://github.com/randytarampi/pseudolocalize/commit/56152194c8711aeced8ad7b5c92ac8bc33c14b15))

## [2.13.14](https://github.com/randytarampi/pseudolocalize/compare/v2.13.13...v2.13.14) (2020-10-19)


### Bug Fixes

* upgrade semantic-release from 17.2.0 to 17.2.1 ([01bd55e](https://github.com/randytarampi/pseudolocalize/commit/01bd55e3c602d6d651aa3bac99e7b515db33efa3))
* upgrade snyk from 1.406.0 to 1.414.1 ([7c78310](https://github.com/randytarampi/pseudolocalize/commit/7c783107c381c5a4df1a58c7c0657858e143f433))

## [2.13.13](https://github.com/randytarampi/pseudolocalize/compare/v2.13.12...v2.13.13) (2020-10-18)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([82e03c6](https://github.com/randytarampi/pseudolocalize/commit/82e03c620f7bc2215fa6bb8e04826db1847595c1))
* upgrade semantic-release from 17.1.2 to 17.2.0 ([3f0c397](https://github.com/randytarampi/pseudolocalize/commit/3f0c397d05d7c3bab75254d1bf9d4475126e61ad))
* upgrade sinon from 9.1.0 to 9.2.0 ([8545d45](https://github.com/randytarampi/pseudolocalize/commit/8545d450a539264a4e951130daa8babd97bd0c08))
* upgrade snyk from 1.405.1 to 1.406.0 ([2ed9af3](https://github.com/randytarampi/pseudolocalize/commit/2ed9af379d4ae067aec41542fbffe86fad275e6d))

## [2.13.12](https://github.com/randytarampi/pseudolocalize/compare/v2.13.11...v2.13.12) (2020-10-03)


### Bug Fixes

* upgrade snyk from 1.402.0 to 1.405.1 ([1317ed3](https://github.com/randytarampi/pseudolocalize/commit/1317ed352bc728b5e74632ba798864d7dc5b8dc2))

## [2.13.11](https://github.com/randytarampi/pseudolocalize/compare/v2.13.10...v2.13.11) (2020-10-01)


### Bug Fixes

* upgrade sinon from 9.0.3 to 9.1.0 ([c7cfac5](https://github.com/randytarampi/pseudolocalize/commit/c7cfac5f23dd2ca8717f0f56ff565ccbf4b36792))
* upgrade snyk from 1.400.0 to 1.402.0 ([deb66ac](https://github.com/randytarampi/pseudolocalize/commit/deb66ac6ceded03d8d678281dbf60e884f6606aa))

## [2.13.10](https://github.com/randytarampi/pseudolocalize/compare/v2.13.9...v2.13.10) (2020-09-29)


### Bug Fixes

* upgrade eslint-plugin-import from 2.22.0 to 2.22.1 ([b047263](https://github.com/randytarampi/pseudolocalize/commit/b0472635fa596ece57e2e74c3ef2d629f6813bb0))
* upgrade snyk from 1.399.1 to 1.400.0 ([f98cb75](https://github.com/randytarampi/pseudolocalize/commit/f98cb75ba4b60432c85fab9342a532c2892bbc33))

## [2.13.9](https://github.com/randytarampi/pseudolocalize/compare/v2.13.8...v2.13.9) (2020-09-23)


### Bug Fixes

* upgrade snyk from 1.398.1 to 1.399.1 ([6132634](https://github.com/randytarampi/pseudolocalize/commit/6132634ade4918ecd30adc2fa88a6052698d601b))

## [2.13.8](https://github.com/randytarampi/pseudolocalize/compare/v2.13.7...v2.13.8) (2020-09-22)


### Bug Fixes

* upgrade semantic-release from 17.1.1 to 17.1.2 ([2fc5a3d](https://github.com/randytarampi/pseudolocalize/commit/2fc5a3dd6b45614fac0b026f23f9d7396cd5db60))

## [2.13.7](https://github.com/randytarampi/pseudolocalize/compare/v2.13.6...v2.13.7) (2020-09-18)


### Bug Fixes

* upgrade snyk from 1.395.0 to 1.398.1 ([abf2a5e](https://github.com/randytarampi/pseudolocalize/commit/abf2a5ee4fd5d162bdc2113b3d815ca667391bab))

## [2.13.6](https://github.com/randytarampi/pseudolocalize/compare/v2.13.5...v2.13.6) (2020-09-17)


### Bug Fixes

* upgrade snyk from 1.393.0 to 1.395.0 ([d8b9c33](https://github.com/randytarampi/pseudolocalize/commit/d8b9c33c5295bead1775a3fd7d739ea0d37f80d5))

## [2.13.5](https://github.com/randytarampi/pseudolocalize/compare/v2.13.4...v2.13.5) (2020-09-13)


### Bug Fixes

* upgrade snyk from 1.386.0 to 1.387.1 ([238a197](https://github.com/randytarampi/pseudolocalize/commit/238a1977b132d8a8577712a9c33670351a0f1845))

## [2.13.4](https://github.com/randytarampi/pseudolocalize/compare/v2.13.3...v2.13.4) (2020-08-29)


### Bug Fixes

* **package:** Bump packages for security updates (2020-08-29) ([d260d09](https://github.com/randytarampi/pseudolocalize/commit/d260d09c5dd1cbb32cb25de48c6f1f484034e2cd)), closes [/github.com/randytarampi/slamscan/pull/131#issuecomment-669014514](https://github.com//github.com/randytarampi/slamscan/pull/131/issues/issuecomment-669014514) [/github.com/randytarampi/lwip/pull/47#issuecomment-669576137](https://github.com//github.com/randytarampi/lwip/pull/47/issues/issuecomment-669576137) [/github.com/randytarampi/lwip/pull/46#issuecomment-669587798](https://github.com//github.com/randytarampi/lwip/pull/46/issues/issuecomment-669587798) [/github.com/randytarampi/pseudolocalize/pull/43#issuecomment-669639431](https://github.com//github.com/randytarampi/pseudolocalize/pull/43/issues/issuecomment-669639431) [/github.com/randytarampi/pseudolocalize/pull/44#issuecomment-669640745](https://github.com//github.com/randytarampi/pseudolocalize/pull/44/issues/issuecomment-669640745) [/github.com/randytarampi/pseudoimage/pull/60#issuecomment-669730376](https://github.com//github.com/randytarampi/pseudoimage/pull/60/issues/issuecomment-669730376) [/github.com/randytarampi/slamscan/pull/132#issuecomment-669738806](https://github.com//github.com/randytarampi/slamscan/pull/132/issues/issuecomment-669738806) [/github.com/randytarampi/slamscan/pull/134#issuecomment-669738983](https://github.com//github.com/randytarampi/slamscan/pull/134/issues/issuecomment-669738983) [/github.com/randytarampi/slamscan/pull/133#issuecomment-669739016](https://github.com//github.com/randytarampi/slamscan/pull/133/issues/issuecomment-669739016) [/github.com/randytarampi/pseudoimage/pull/61#issuecomment-669743569](https://github.com//github.com/randytarampi/pseudoimage/pull/61/issues/issuecomment-669743569) [/github.com/randytarampi/slamscan/pull/135#issuecomment-671014646](https://github.com//github.com/randytarampi/slamscan/pull/135/issues/issuecomment-671014646) [/github.com/randytarampi/pseudolocalize/pull/45#issuecomment-673205158](https://github.com//github.com/randytarampi/pseudolocalize/pull/45/issues/issuecomment-673205158) [/github.com/randytarampi/pseudoimage/pull/62#issuecomment-673288919](https://github.com//github.com/randytarampi/pseudoimage/pull/62/issues/issuecomment-673288919) [/github.com/randytarampi/lwip/pull/48#issuecomment-674452146](https://github.com//github.com/randytarampi/lwip/pull/48/issues/issuecomment-674452146) [/github.com/randytarampi/me/pull/748#issuecomment-674633206](https://github.com//github.com/randytarampi/me/pull/748/issues/issuecomment-674633206)

## [2.13.3](https://github.com/randytarampi/pseudolocalize/compare/v2.13.2...v2.13.3) (2020-05-04)


### Bug Fixes

* upgrade snyk from 1.316.1 to 1.316.2 ([4bbfd61](https://github.com/randytarampi/pseudolocalize/commit/4bbfd61ccbb988af8a65265c17bf0de9521b300a))
* upgrade snyk from 1.316.1 to 1.316.2 ([c26876e](https://github.com/randytarampi/pseudolocalize/commit/c26876e21bfcd8d99e720686cbf9710849ff2058))

## [2.13.2](https://github.com/randytarampi/pseudolocalize/compare/v2.13.1...v2.13.2) (2020-04-30)


### Bug Fixes

* package.json, package-lock.json & .snyk to reduce vulnerabilities ([06533ef](https://github.com/randytarampi/pseudolocalize/commit/06533ef7afab5168c4a6005a0a68d09462ca184f))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([11371b1](https://github.com/randytarampi/pseudolocalize/commit/11371b11c1800d61a33d450d2989b668172081ea))
* package.json, package-lock.json & .snyk to reduce vulnerabilities ([0485c35](https://github.com/randytarampi/pseudolocalize/commit/0485c357892fdd0d2d88aef6f619e5df4fe3713f))
* upgrade commander from 5.0.0 to 5.1.0 ([d84175c](https://github.com/randytarampi/pseudolocalize/commit/d84175c201216b4015f74fc066685f73159c4639))
* upgrade commander from 5.0.0 to 5.1.0 ([550479d](https://github.com/randytarampi/pseudolocalize/commit/550479d598215c17850328d06e364938a0360d62))
* upgrade mocha from 7.1.1 to 7.1.2 ([bab842f](https://github.com/randytarampi/pseudolocalize/commit/bab842f61303d3ee2f116ddbe4402dd152c409b1))
* upgrade mocha from 7.1.1 to 7.1.2 ([ebade69](https://github.com/randytarampi/pseudolocalize/commit/ebade695916a6bbb372ff096be6679032a97c689))
* upgrade nyc from 15.0.0 to 15.0.1 ([a680a89](https://github.com/randytarampi/pseudolocalize/commit/a680a89df187574653463c09f48d63dea628621e))
* upgrade nyc from 15.0.0 to 15.0.1 ([198837a](https://github.com/randytarampi/pseudolocalize/commit/198837a0c56f37a7e384def916b3121ed03ac8ae))

## [2.13.1](https://github.com/randytarampi/pseudolocalize/compare/v2.13.0...v2.13.1) (2020-04-29)


### Bug Fixes

* package.json & package-lock.json to reduce vulnerabilities ([b47236e](https://github.com/randytarampi/pseudolocalize/commit/b47236ec26c8e56fc32fcc85a2cbb265dc328905))
* package.json & package-lock.json to reduce vulnerabilities ([717ee36](https://github.com/randytarampi/pseudolocalize/commit/717ee36017a54755f8e61a9ba5a892c193941f5e))
* upgrade @semantic-release/changelog from 5.0.0 to 5.0.1 ([0fa2b34](https://github.com/randytarampi/pseudolocalize/commit/0fa2b34a8a244505860f489ef3ef9effdbf4ca04))
* upgrade @semantic-release/changelog from 5.0.0 to 5.0.1 ([3279978](https://github.com/randytarampi/pseudolocalize/commit/3279978b7cb97ddb972a6f992541287c5216aa32))
* upgrade coveralls from 3.0.9 to 3.1.0 ([ae352aa](https://github.com/randytarampi/pseudolocalize/commit/ae352aaf68b168d49adc52c248696dd4bac8864b))
* upgrade coveralls from 3.0.9 to 3.1.0 ([d192bd6](https://github.com/randytarampi/pseudolocalize/commit/d192bd6df37daab178f832141e406d410d65f1f2))
* upgrade eslint-plugin-import from 2.19.1 to 2.20.2 ([9d82f1b](https://github.com/randytarampi/pseudolocalize/commit/9d82f1b1d9c4627ace8651adb20c7b51c2a683ed))
* upgrade eslint-plugin-import from 2.19.1 to 2.20.2 ([8daa7f2](https://github.com/randytarampi/pseudolocalize/commit/8daa7f222272d6b3edb723ae599df6ec43db9765))
* upgrade semantic-release from 17.0.0 to 17.0.7 ([f94c8e0](https://github.com/randytarampi/pseudolocalize/commit/f94c8e0ad448c26ecfe9c124379429c1f97f7282))
* upgrade semantic-release from 17.0.0 to 17.0.7 ([9aa2cf6](https://github.com/randytarampi/pseudolocalize/commit/9aa2cf6716011691a933eec764beab0c09cbce37))

# [2.13.0](https://github.com/randytarampi/pseudolocalize/compare/v2.12.6...v2.13.0) (2020-01-06)


### Features

* **package:** Blindly upgrade our dependencies for the new year and support node@10, node@12 and beyond. ([30488ef](https://github.com/randytarampi/pseudolocalize/commit/30488efd63f5f4d2676b3a0e4a5ff0cd12197c7e))

## [2.12.6](https://github.com/randytarampi/pseudolocalize/compare/v2.12.5...v2.12.6) (2019-03-08)


### Bug Fixes

* **semantic-release:** Fix invalid `.releaserc` yaml. ([7c226a0](https://github.com/randytarampi/pseudolocalize/commit/7c226a0))
* **semantic-release:** Fix the `.releaserc` yaml. ([8d2f50f](https://github.com/randytarampi/pseudolocalize/commit/8d2f50f))
* **semantic-release:** Use `@semantic-release/git` properly ([56479a3](https://github.com/randytarampi/pseudolocalize/commit/56479a3))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.12.4](https://github.com/randytarampi/me/compare/v2.12.3...v2.12.4) (2018-12-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.12.3](https://github.com/randytarampi/me/compare/v2.12.2...v2.12.3) (2018-12-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.12.2](https://github.com/randytarampi/me/compare/v2.12.1...v2.12.2) (2018-12-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.12.1](https://github.com/randytarampi/me/compare/v2.12.0...v2.12.1) (2018-12-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.12.0](https://github.com/randytarampi/me/compare/v2.11.5...v2.12.0) (2018-12-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.11.5](https://github.com/randytarampi/me/compare/v2.11.4...v2.11.5) (2018-12-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.11.4](https://github.com/randytarampi/me/compare/v2.11.3...v2.11.4) (2018-12-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.11.3](https://github.com/randytarampi/me/compare/v2.11.2...v2.11.3) (2018-12-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.11.2](https://github.com/randytarampi/me/compare/v2.11.1...v2.11.2) (2018-12-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.11.1](https://github.com/randytarampi/me/compare/v2.11.0...v2.11.1) (2018-12-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.11.0](https://github.com/randytarampi/me/compare/v2.10.6...v2.11.0) (2018-12-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.6](https://github.com/randytarampi/me/compare/v2.10.5...v2.10.6) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.5](https://github.com/randytarampi/me/compare/v2.10.4...v2.10.5) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.4](https://github.com/randytarampi/me/compare/v2.10.3...v2.10.4) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.3](https://github.com/randytarampi/me/compare/v2.10.2...v2.10.3) (2018-12-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.2](https://github.com/randytarampi/me/compare/v2.10.1...v2.10.2) (2018-12-12)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.10.1](https://github.com/randytarampi/me/compare/v2.10.0...v2.10.1) (2018-12-12)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.10.0](https://github.com/randytarampi/me/compare/v2.8.1...v2.10.0) (2018-12-12)


### Features

* **www:** Start tree shaking. ([0ebf7f6](https://github.com/randytarampi/me/commit/0ebf7f6))





# [2.9.0](https://github.com/randytarampi/me/compare/v2.8.1...v2.9.0) (2018-12-12)


### Features

* **www:** Start tree shaking. ([0ebf7f6](https://github.com/randytarampi/me/commit/0ebf7f6))





## [2.8.1](https://github.com/randytarampi/me/compare/v2.8.0...v2.8.1) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.8.0](https://github.com/randytarampi/me/compare/v2.7.0...v2.8.0) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.7.0](https://github.com/randytarampi/me/compare/v2.6.0...v2.7.0) (2018-12-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.6.0](https://github.com/randytarampi/me/compare/v2.4.6...v2.6.0) (2018-12-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.5.0](https://github.com/randytarampi/me/compare/v2.4.6...v2.5.0) (2018-12-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.6](https://github.com/randytarampi/me/compare/v2.4.5...v2.4.6) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.5](https://github.com/randytarampi/me/compare/v2.4.4...v2.4.5) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.4](https://github.com/randytarampi/me/compare/v2.4.3...v2.4.4) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.3](https://github.com/randytarampi/me/compare/v2.4.2...v2.4.3) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.2](https://github.com/randytarampi/me/compare/v2.4.1...v2.4.2) (2018-12-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.4.1](https://github.com/randytarampi/me/compare/v2.4.0...v2.4.1) (2018-12-08)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.4.0](https://github.com/randytarampi/me/compare/v2.3.0...v2.4.0) (2018-12-08)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.3.0](https://github.com/randytarampi/me/compare/v2.2.3...v2.3.0) (2018-12-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.2.3](https://github.com/randytarampi/me/compare/v2.2.2...v2.2.3) (2018-12-02)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.2.2](https://github.com/randytarampi/me/compare/v2.2.1...v2.2.2) (2018-11-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.2.1](https://github.com/randytarampi/me/compare/v2.2.0...v2.2.1) (2018-11-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.2.0](https://github.com/randytarampi/me/compare/v2.1.4...v2.2.0) (2018-11-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.1.4](https://github.com/randytarampi/me/compare/v2.1.3...v2.1.4) (2018-11-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.1.3](https://github.com/randytarampi/me/compare/v2.1.2...v2.1.3) (2018-11-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.1.2](https://github.com/randytarampi/me/compare/v2.1.1...v2.1.2) (2018-11-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.1.1](https://github.com/randytarampi/me/compare/v2.1.0...v2.1.1) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.1.0](https://github.com/randytarampi/me/compare/v2.0.7...v2.1.0) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.7](https://github.com/randytarampi/me/compare/v2.0.6...v2.0.7) (2018-11-25)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.6](https://github.com/randytarampi/me/compare/v2.0.5...v2.0.6) (2018-11-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.5](https://github.com/randytarampi/me/compare/v2.0.4...v2.0.5) (2018-11-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.4](https://github.com/randytarampi/me/compare/v2.0.3...v2.0.4) (2018-11-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.3](https://github.com/randytarampi/me/compare/v2.0.2...v2.0.3) (2018-11-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.2](https://github.com/randytarampi/me/compare/v2.0.1...v2.0.2) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [2.0.1](https://github.com/randytarampi/me/compare/v2.0.0...v2.0.1) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [2.0.0](https://github.com/randytarampi/me/compare/v1.7.2...v2.0.0) (2018-11-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.7.2](https://github.com/randytarampi/me/compare/v1.7.1...v1.7.2) (2018-11-19)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.7.1](https://github.com/randytarampi/me/compare/v1.7.0...v1.7.1) (2018-11-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.7.0](https://github.com/randytarampi/me/compare/v1.6.3...v1.7.0) (2018-11-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.6.3](https://github.com/randytarampi/me/compare/v1.6.2...v1.6.3) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.6.2](https://github.com/randytarampi/me/compare/v1.6.1...v1.6.2) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.6.1](https://github.com/randytarampi/me/compare/v1.6.0...v1.6.1) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.6.0](https://github.com/randytarampi/me/compare/v1.5.3...v1.6.0) (2018-11-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.5.3](https://github.com/randytarampi/me/compare/v1.5.2...v1.5.3) (2018-11-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.5.2](https://github.com/randytarampi/me/compare/v1.5.1...v1.5.2) (2018-11-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.5.1](https://github.com/randytarampi/me/compare/v1.5.0...v1.5.1) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.5.0](https://github.com/randytarampi/me/compare/v1.4.0...v1.5.0) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.4.0](https://github.com/randytarampi/me/compare/v1.3.9...v1.4.0) (2018-11-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.9](https://github.com/randytarampi/me/compare/v1.3.8...v1.3.9) (2018-11-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.8](https://github.com/randytarampi/me/compare/v1.3.7...v1.3.8) (2018-11-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.7](https://github.com/randytarampi/me/compare/v1.3.6...v1.3.7) (2018-11-08)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.6](https://github.com/randytarampi/me/compare/v1.3.5...v1.3.6) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.5](https://github.com/randytarampi/me/compare/v1.3.4...v1.3.5) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.4](https://github.com/randytarampi/me/compare/v1.3.3...v1.3.4) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.3](https://github.com/randytarampi/me/compare/v1.3.2...v1.3.3) (2018-11-07)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.2](https://github.com/randytarampi/me/compare/v1.3.1...v1.3.2) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.3.1](https://github.com/randytarampi/me/compare/v1.3.0...v1.3.1) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.3.0](https://github.com/randytarampi/me/compare/v1.2.5...v1.3.0) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.2.5](https://github.com/randytarampi/me/compare/v1.2.4...v1.2.5) (2018-11-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.2.4](https://github.com/randytarampi/me/compare/v1.2.3...v1.2.4) (2018-11-05)


### Bug Fixes

* **package:** `lib` now lives in `src/lib`. ([84cced2](https://github.com/randytarampi/me/commit/84cced2))





## [1.2.3](https://github.com/randytarampi/me/compare/v1.2.2...v1.2.3) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.2.2](https://github.com/randytarampi/me/compare/v1.2.1...v1.2.2) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.2.1](https://github.com/randytarampi/me/compare/v1.2.0...v1.2.1) (2018-11-05)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.2.0](https://github.com/randytarampi/me/compare/v1.1.8...v1.2.0) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.8](https://github.com/randytarampi/me/compare/v1.1.7...v1.1.8) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.7](https://github.com/randytarampi/me/compare/v1.1.6...v1.1.7) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.6](https://github.com/randytarampi/me/compare/v1.1.5...v1.1.6) (2018-11-04)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.5](https://github.com/randytarampi/me/compare/v1.1.4...v1.1.5) (2018-11-03)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.4](https://github.com/randytarampi/me/compare/v1.1.3...v1.1.4) (2018-11-03)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.3](https://github.com/randytarampi/me/compare/v1.1.2...v1.1.3) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.2](https://github.com/randytarampi/me/compare/v1.1.1...v1.1.2) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.1.1](https://github.com/randytarampi/me/compare/v1.1.0...v1.1.1) (2018-11-02)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.1.0](https://github.com/randytarampi/me/compare/v1.0.2...v1.1.0) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.0.2](https://github.com/randytarampi/me/compare/v1.0.0...v1.0.2) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [1.0.1](https://github.com/randytarampi/me/compare/v1.0.0...v1.0.1) (2018-11-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [1.0.0](https://github.com/randytarampi/me/compare/v0.48.0...v1.0.0) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.48.0](https://github.com/randytarampi/me/compare/v0.47.22...v0.48.0) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.22](https://github.com/randytarampi/me/compare/v0.47.21...v0.47.22) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.21](https://github.com/randytarampi/me/compare/v0.47.20...v0.47.21) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.20](https://github.com/randytarampi/me/compare/v0.47.19...v0.47.20) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.19](https://github.com/randytarampi/me/compare/v0.47.18...v0.47.19) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.18](https://github.com/randytarampi/me/compare/v0.47.17...v0.47.18) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.17](https://github.com/randytarampi/me/compare/v0.47.16...v0.47.17) (2018-10-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.16](https://github.com/randytarampi/me/compare/v0.47.15...v0.47.16) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.15](https://github.com/randytarampi/me/compare/v0.47.14...v0.47.15) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.14](https://github.com/randytarampi/me/compare/v0.47.13...v0.47.14) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.13](https://github.com/randytarampi/me/compare/v0.47.12...v0.47.13) (2018-10-30)


### Bug Fixes

* Remove `package-lock`s. ([b2bf2db](https://github.com/randytarampi/me/commit/b2bf2db))





## [0.47.12](https://github.com/randytarampi/me/compare/v0.47.11...v0.47.12) (2018-10-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize







**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.10](https://github.com/randytarampi/me/compare/v0.47.9...v0.47.10) (2018-10-29)


### Bug Fixes

* **package:** Just nuke all these `package-lock`s for now. ([a6c7d72](https://github.com/randytarampi/me/commit/a6c7d72))





## [0.47.9](https://github.com/randytarampi/me/compare/v0.47.8...v0.47.9) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.8](https://github.com/randytarampi/me/compare/v0.47.7...v0.47.8) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.7](https://github.com/randytarampi/me/compare/v0.47.6...v0.47.7) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.6](https://github.com/randytarampi/me/compare/v0.47.5...v0.47.6) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.5](https://github.com/randytarampi/me/compare/v0.47.4...v0.47.5) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.4](https://github.com/randytarampi/me/compare/v0.47.3...v0.47.4) (2018-10-29)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.3](https://github.com/randytarampi/me/compare/v0.47.2...v0.47.3) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.2](https://github.com/randytarampi/me/compare/v0.47.1...v0.47.2) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.47.1](https://github.com/randytarampi/me/compare/v0.47.0...v0.47.1) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.47.0](https://github.com/randytarampi/me/compare/v0.46.1...v0.47.0) (2018-10-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.46.1](https://github.com/randytarampi/me/compare/v0.46.0...v0.46.1) (2018-10-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.46.0](https://github.com/randytarampi/me/compare/v0.45.8...v0.46.0) (2018-10-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.8](https://github.com/randytarampi/me/compare/v0.45.7...v0.45.8) (2018-10-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.7](https://github.com/randytarampi/me/compare/v0.45.6...v0.45.7) (2018-10-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.6](https://github.com/randytarampi/me/compare/v0.45.5...v0.45.6) (2018-10-21)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.5](https://github.com/randytarampi/me/compare/v0.45.4...v0.45.5) (2018-10-21)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.4](https://github.com/randytarampi/me/compare/v0.45.3...v0.45.4) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.3](https://github.com/randytarampi/me/compare/v0.45.2...v0.45.3) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.2](https://github.com/randytarampi/me/compare/v0.45.1...v0.45.2) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.45.1](https://github.com/randytarampi/me/compare/v0.45.0...v0.45.1) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.45.0](https://github.com/randytarampi/me/compare/v0.44.0...v0.45.0) (2018-10-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.44.0](https://github.com/randytarampi/me/compare/v0.43.13...v0.44.0) (2018-10-19)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.13](https://github.com/randytarampi/me/compare/v0.43.12...v0.43.13) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.12](https://github.com/randytarampi/me/compare/v0.43.11...v0.43.12) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.11](https://github.com/randytarampi/me/compare/v0.43.10...v0.43.11) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.10](https://github.com/randytarampi/me/compare/v0.43.9...v0.43.10) (2018-10-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.9](https://github.com/randytarampi/me/compare/v0.43.8...v0.43.9) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.8](https://github.com/randytarampi/me/compare/v0.43.7...v0.43.8) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.7](https://github.com/randytarampi/me/compare/v0.43.6...v0.43.7) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.6](https://github.com/randytarampi/me/compare/v0.43.5...v0.43.6) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.5](https://github.com/randytarampi/me/compare/v0.43.4...v0.43.5) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.4](https://github.com/randytarampi/me/compare/v0.43.3...v0.43.4) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.3](https://github.com/randytarampi/me/compare/v0.43.2...v0.43.3) (2018-10-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.2](https://github.com/randytarampi/me/compare/v0.43.1...v0.43.2) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.43.1](https://github.com/randytarampi/me/compare/v0.43.0...v0.43.1) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.43.0](https://github.com/randytarampi/me/compare/v0.42.2...v0.43.0) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.42.2](https://github.com/randytarampi/me/compare/v0.42.1...v0.42.2) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.42.1](https://github.com/randytarampi/me/compare/v0.42.0...v0.42.1) (2018-10-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.42.0](https://github.com/randytarampi/me/compare/v0.41.7...v0.42.0) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.7](https://github.com/randytarampi/me/compare/v0.41.6...v0.41.7) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.6](https://github.com/randytarampi/me/compare/v0.41.5...v0.41.6) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.5](https://github.com/randytarampi/me/compare/v0.41.4...v0.41.5) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.4](https://github.com/randytarampi/me/compare/v0.41.3...v0.41.4) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.3](https://github.com/randytarampi/me/compare/v0.41.2...v0.41.3) (2018-10-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.2](https://github.com/randytarampi/me/compare/v0.41.1...v0.41.2) (2018-10-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.41.1](https://github.com/randytarampi/me/compare/v0.41.0...v0.41.1) (2018-10-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





# [0.41.0](https://github.com/randytarampi/me/compare/v0.40.19...v0.41.0) (2018-10-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.19](https://github.com/randytarampi/me/compare/v0.40.18...v0.40.19) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.18](https://github.com/randytarampi/me/compare/v0.40.17...v0.40.18) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.17](https://github.com/randytarampi/me/compare/v0.40.16...v0.40.17) (2018-10-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.16](https://github.com/randytarampi/me/compare/v0.40.15...v0.40.16) (2018-10-09)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.15](https://github.com/randytarampi/me/compare/v0.40.14...v0.40.15) (2018-10-05)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





## [0.40.14](https://github.com/randytarampi/me/compare/v0.40.13...v0.40.14) (2018-10-04)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.13"></a>
## [0.40.13](https://github.com/randytarampi/me/compare/v0.40.12...v0.40.13) (2018-09-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.12"></a>
## [0.40.12](https://github.com/randytarampi/me/compare/v0.40.11...v0.40.12) (2018-09-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.11"></a>
## [0.40.11](https://github.com/randytarampi/me/compare/v0.40.10...v0.40.11) (2018-09-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.10"></a>
## [0.40.10](https://github.com/randytarampi/me/compare/v0.40.9...v0.40.10) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.9"></a>
## [0.40.9](https://github.com/randytarampi/me/compare/v0.40.8...v0.40.9) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.8"></a>
## [0.40.8](https://github.com/randytarampi/me/compare/v0.40.7...v0.40.8) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.7"></a>
## [0.40.7](https://github.com/randytarampi/me/compare/v0.40.6...v0.40.7) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.6"></a>
## [0.40.6](https://github.com/randytarampi/me/compare/v0.40.5...v0.40.6) (2018-09-26)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.5"></a>
## [0.40.5](https://github.com/randytarampi/me/compare/v0.40.4...v0.40.5) (2018-09-25)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.4"></a>
## [0.40.4](https://github.com/randytarampi/me/compare/v0.40.3...v0.40.4) (2018-09-25)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.3"></a>
## [0.40.3](https://github.com/randytarampi/me/compare/v0.40.2...v0.40.3) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.2"></a>
## [0.40.2](https://github.com/randytarampi/me/compare/v0.40.1...v0.40.2) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.1"></a>
## [0.40.1](https://github.com/randytarampi/me/compare/v0.40.0...v0.40.1) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.40.0"></a>
# [0.40.0](https://github.com/randytarampi/me/compare/v0.39.13...v0.40.0) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.13"></a>
## [0.39.13](https://github.com/randytarampi/me/compare/v0.39.12...v0.39.13) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.12"></a>
## [0.39.12](https://github.com/randytarampi/me/compare/v0.39.11...v0.39.12) (2018-09-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.11"></a>
## [0.39.11](https://github.com/randytarampi/me/compare/v0.39.10...v0.39.11) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.10"></a>
## [0.39.10](https://github.com/randytarampi/me/compare/v0.39.9...v0.39.10) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.9"></a>
## [0.39.9](https://github.com/randytarampi/me/compare/v0.39.8...v0.39.9) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.8"></a>
## [0.39.8](https://github.com/randytarampi/me/compare/v0.39.7...v0.39.8) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.7"></a>
## [0.39.7](https://github.com/randytarampi/me/compare/v0.39.6...v0.39.7) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.6"></a>
## [0.39.6](https://github.com/randytarampi/me/compare/v0.39.5...v0.39.6) (2018-09-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.5"></a>
## [0.39.5](https://github.com/randytarampi/me/compare/v0.39.4...v0.39.5) (2018-09-22)


### Bug Fixes

* **docs:** Better namespace the `ga-beacon` path. ([803878a](https://github.com/randytarampi/me/commit/803878a))





<a name="0.39.4"></a>
## [0.39.4](https://github.com/randytarampi/me/compare/v0.39.3...v0.39.4) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.3"></a>
## [0.39.3](https://github.com/randytarampi/me/compare/v0.39.2...v0.39.3) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.2"></a>
## [0.39.2](https://github.com/randytarampi/me/compare/v0.39.1...v0.39.2) (2018-09-22)


### Bug Fixes

* **docs:** `https://nodei.co/npm` -> `https://nodeico.herokuapp.com`. ([25a8929](https://github.com/randytarampi/me/commit/25a8929))





<a name="0.39.1"></a>
## [0.39.1](https://github.com/randytarampi/me/compare/v0.39.0...v0.39.1) (2018-09-22)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.39.0"></a>
# [0.39.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.39.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.38.0"></a>
# [0.38.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.38.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.37.0"></a>
# [0.37.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.37.0) (2018-09-22)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.36.0"></a>
# [0.36.0](https://github.com/randytarampi/me/compare/v0.35.0...v0.36.0) (2018-09-21)


### Features

* **resume:** Make `resume` publishable per [#67](https://github.com/randytarampi/me/issues/67). ([7686d58](https://github.com/randytarampi/me/commit/7686d58))





<a name="0.35.0"></a>
# [0.35.0](https://github.com/randytarampi/me/compare/v0.34.3...v0.35.0) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.34.3"></a>
## [0.34.3](https://github.com/randytarampi/me/compare/v0.34.1...v0.34.3) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.34.2"></a>
## [0.34.2](https://github.com/randytarampi/me/compare/v0.34.1...v0.34.2) (2018-09-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.34.1"></a>
## [0.34.1](https://github.com/randytarampi/me/compare/v0.34.0...v0.34.1) (2018-09-19)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.34.0"></a>
# [0.34.0](https://github.com/randytarampi/me/compare/v0.33.2...v0.34.0) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.33.2"></a>
## [0.33.2](https://github.com/randytarampi/me/compare/v0.33.1...v0.33.2) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.33.1"></a>
## [0.33.1](https://github.com/randytarampi/me/compare/v0.33.0...v0.33.1) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.33.0"></a>
# [0.33.0](https://github.com/randytarampi/me/compare/v0.32.1...v0.33.0) (2018-09-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.32.1"></a>
## [0.32.1](https://github.com/randytarampi/me/compare/v0.32.0...v0.32.1) (2018-09-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.32.0"></a>
# [0.32.0](https://github.com/randytarampi/me/compare/v0.31.7...v0.32.0) (2018-09-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.7"></a>
## [0.31.7](https://github.com/randytarampi/me/compare/v0.31.6...v0.31.7) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.6"></a>
## [0.31.6](https://github.com/randytarampi/me/compare/v0.31.5...v0.31.6) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.5"></a>
## [0.31.5](https://github.com/randytarampi/me/compare/v0.31.4...v0.31.5) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.4"></a>
## [0.31.4](https://github.com/randytarampi/me/compare/v0.31.3...v0.31.4) (2018-09-16)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.3"></a>
## [0.31.3](https://github.com/randytarampi/me/compare/v0.31.2...v0.31.3) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.2"></a>
## [0.31.2](https://github.com/randytarampi/me/compare/v0.31.1...v0.31.2) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.31.1"></a>
## [0.31.1](https://github.com/randytarampi/me/compare/v0.31.0...v0.31.1) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.30.0"></a>
# [0.30.0](https://github.com/randytarampi/me/compare/v0.29.1...v0.30.0) (2018-09-15)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.29.1"></a>
## [0.29.1](https://github.com/randytarampi/me/compare/v0.29.0...v0.29.1) (2018-09-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.29.0"></a>
# [0.29.0](https://github.com/randytarampi/me/compare/v0.28.0...v0.29.0) (2018-09-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.28.0"></a>
# [0.28.0](https://github.com/randytarampi/me/compare/v0.27.1...v0.28.0) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.27.1"></a>
## [0.27.1](https://github.com/randytarampi/me/compare/v0.27.0...v0.27.1) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.27.0"></a>
# [0.27.0](https://github.com/randytarampi/me/compare/v0.26.1...v0.27.0) (2018-09-13)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.26.1"></a>
## [0.26.1](https://github.com/randytarampi/me/compare/v0.26.0...v0.26.1) (2018-09-12)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.26.0"></a>
# [0.26.0](https://github.com/randytarampi/me/compare/v0.25.4...v0.26.0) (2018-09-12)


### Bug Fixes

* **pseudolocalize:** `main` should refer to the correct file. ([f5625e7](https://github.com/randytarampi/me/commit/f5625e7))





<a name="0.25.4"></a>
## [0.25.4](https://github.com/randytarampi/me/compare/v0.25.3...v0.25.4) (2018-09-12)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.25.3"></a>
## [0.25.3](https://github.com/randytarampi/me/compare/v0.25.2...v0.25.3) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.25.2"></a>
## [0.25.2](https://github.com/randytarampi/me/compare/v0.25.1...v0.25.2) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.25.1"></a>
## [0.25.1](https://github.com/randytarampi/me/compare/v0.25.0...v0.25.1) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.25.0"></a>
# [0.25.0](https://github.com/randytarampi/me/compare/v0.24.7...v0.25.0) (2018-09-11)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.24.0"></a>
# [0.24.0](https://github.com/randytarampi/me/compare/v0.23.12...v0.24.0) (2018-09-06)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.23.0"></a>
# [0.23.0](https://github.com/randytarampi/me/compare/v0.22.9...v0.23.0) (2018-09-02)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.22.9"></a>
## [0.22.9](https://github.com/randytarampi/me/compare/v0.22.8...v0.22.9) (2018-09-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.22.5"></a>
## [0.22.5](https://github.com/randytarampi/me/compare/v0.22.4...v0.22.5) (2018-09-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.22.3"></a>
## [0.22.3](https://github.com/randytarampi/me/compare/v0.22.2...v0.22.3) (2018-08-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.22.0"></a>
# [0.22.0](https://github.com/randytarampi/me/compare/v0.21.0...v0.22.0) (2018-08-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.21.0"></a>
# [0.21.0](https://github.com/randytarampi/me/compare/v0.20.6...v0.21.0) (2018-08-31)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.20.0"></a>
# [0.20.0](https://github.com/randytarampi/me/compare/v0.19.6...v0.20.0) (2018-08-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.19.5"></a>
## [0.19.5](https://github.com/randytarampi/me/compare/v0.19.4...v0.19.5) (2018-08-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.19.1"></a>
## [0.19.1](https://github.com/randytarampi/me/compare/v0.19.0...v0.19.1) (2018-08-27)


### Bug Fixes

* **pseudolocalize:** Fix broken `p7e` bin script. ([5368926](https://github.com/randytarampi/me/commit/5368926)), closes [#12](https://github.com/randytarampi/me/issues/12)





<a name="0.19.0"></a>
# [0.19.0](https://github.com/randytarampi/me/compare/v0.18.4...v0.19.0) (2018-08-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.18.1"></a>
## [0.18.1](https://github.com/randytarampi/me/compare/v0.18.0...v0.18.1) (2018-08-24)


### Bug Fixes

* User facing URLs should be `https`, and rooted at `www.randytarampi.ca`. ([f3ee4ea](https://github.com/randytarampi/me/commit/f3ee4ea))





<a name="0.18.0"></a>
# [0.18.0](https://github.com/randytarampi/me/compare/v0.17.1...v0.18.0) (2018-08-24)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.17.0"></a>
# [0.17.0](https://github.com/randytarampi/me/compare/v0.16.5...v0.17.0) (2018-08-23)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.16.0"></a>
# [0.16.0](https://github.com/randytarampi/me/compare/v0.15.0...v0.16.0) (2018-08-20)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.15.0"></a>
# [0.15.0](https://github.com/randytarampi/me/compare/v0.14.3...v0.15.0) (2018-08-19)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.14.0"></a>
# [0.14.0](https://github.com/randytarampi/me/compare/v0.13.1...v0.14.0) (2018-08-18)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.13.0"></a>
# [0.13.0](https://github.com/randytarampi/me/compare/v0.12.1...v0.13.0) (2018-08-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.12.0"></a>
# [0.12.0](https://github.com/randytarampi/me/compare/v0.11.3...v0.12.0) (2018-08-17)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.11.0"></a>
# [0.11.0](https://github.com/randytarampi/me/compare/v0.10.9...v0.11.0) (2018-08-14)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.10.0"></a>
# [0.10.0](https://github.com/randytarampi/me/compare/v0.9.1...v0.10.0) (2018-08-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.9.0"></a>
# [0.9.0](https://github.com/randytarampi/me/compare/v0.8.2...v0.9.0) (2018-08-10)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.8.0"></a>
# [0.8.0](https://github.com/randytarampi/me/compare/v0.7.0...v0.8.0) (2018-08-08)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.7.0"></a>
# [0.7.0](https://github.com/randytarampi/me/compare/v0.6.8...v0.7.0) (2018-08-08)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.6.0"></a>
# [0.6.0](https://github.com/randytarampi/me/compare/v0.5.1...v0.6.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.5.0"></a>
# [0.5.0](https://github.com/randytarampi/me/compare/v0.4.0...v0.5.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.4.0"></a>
# [0.4.0](https://github.com/randytarampi/me/compare/v0.3.2...v0.4.0) (2018-08-03)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.3.0"></a>
# [0.3.0](https://github.com/randytarampi/me/compare/v0.2.0...v0.3.0) (2018-08-01)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.2.0"></a>
# [0.2.0](https://github.com/randytarampi/me/compare/v0.1.11...v0.2.0) (2018-07-30)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.1.8"></a>
## [0.1.8](https://github.com/randytarampi/me/compare/v0.1.7...v0.1.8) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.1.7"></a>
## [0.1.7](https://github.com/randytarampi/me/compare/v0.1.6...v0.1.7) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.1.5"></a>
## [0.1.5](https://github.com/randytarampi/me/compare/v0.1.4...v0.1.5) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.1.0"></a>
# [0.1.0](https://github.com/randytarampi/me/compare/v0.0.11...v0.1.0) (2018-07-28)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.11"></a>
## [0.0.11](https://github.com/randytarampi/me/compare/v0.0.10...v0.0.11) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.10"></a>
## [0.0.10](https://github.com/randytarampi/me/compare/v0.0.9...v0.0.10) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.9"></a>
## [0.0.9](https://github.com/randytarampi/me/compare/v0.0.8...v0.0.9) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.8"></a>
## [0.0.8](https://github.com/randytarampi/me/compare/v0.0.7...v0.0.8) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.7"></a>
## [0.0.7](https://github.com/randytarampi/me/compare/v0.0.6...v0.0.7) (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize





<a name="0.0.6"></a>
## 0.0.6 (2018-07-27)

**Note:** Version bump only for package @randy.tarampi/pseudolocalize
