import { Test, TestingModule } from '@nestjs/testing';
import { PremiumResolver } from './premium.resolver';

describe('PremiumResolver', () => {
  let resolver: PremiumResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PremiumResolver],
    }).compile();

    resolver = module.get<PremiumResolver>(PremiumResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
