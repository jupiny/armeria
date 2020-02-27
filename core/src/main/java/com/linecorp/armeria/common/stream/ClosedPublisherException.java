/*
 * Copyright 2016 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.linecorp.armeria.common.stream;

import com.linecorp.armeria.common.Flags;

/**
 * A {@link RuntimeException} that is raised when a {@link StreamWriter} attempts to write an object to a
 * closed {@link StreamMessage}.
 *
 * @deprecated Use {@link ClosedStreamException}.
 */
@Deprecated
public class ClosedPublisherException extends RuntimeException {

    private static final long serialVersionUID = -7665826869012452735L;

    /**
     * Returns a {@link ClosedPublisherException} which may be a singleton or a new instance, depending on
     * {@link Flags#verboseExceptionSampler()}'s decision.
     */
    public static ClosedPublisherException get() {
        return ClosedStreamException.get();
    }

    ClosedPublisherException() {}

    ClosedPublisherException(@SuppressWarnings("unused") boolean dummy) {
        super(null, null, false, false);
    }
}